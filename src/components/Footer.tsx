import GitHubButton from 'react-github-btn';
export default function Footer() {
    return (
        <div className="d-flex justify-content-center m-4">
            <GitHubButton
                href="https://github.com/wilsonych/Reddit-Trending"
                data-icon="octicon-star"
                data-show-count="true"
                aria-label="Reddit-Trending on GitHub"
            >
                Star
            </GitHubButton>
        </div>
    );
}
