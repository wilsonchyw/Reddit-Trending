export default async function handler(req, res) {
    // Check for secret to confirm this is a valid request
    if (req.query.secret !== process.env.secret) {
        return res.status(401).json({ message: 'Invalid token' });
    }
    const { path } = req.query

    try {
        // this should be the actual path not a rewritten path
        // e.g. for "/blog/[slug]" this should be "/blog/post-1"
        await res.revalidate(path);
        return res.json({ revalidated: true,path });
    } catch (err) {
        // If there was an error, Next.js will continue
        // to show the last successfully generated page
        console.log(err);
        return res.status(500).send('Error revalidating');
    }
}
