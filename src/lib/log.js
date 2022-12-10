

let genContent = (e, timeZone, ...message) => {
    const time = new Date().toLocaleString('en-US', { timeZone });
    message = message.map((msg) => (typeof msg === 'object' ? JSON.stringify(msg) : msg));
    console.log(e)
    const locationRegex = /[\w]+\.[\w]+:[0-9]+/;    
    const location = locationRegex.exec(e.stack.split('\n')[2]);
    const functionRegex = /\ {1}(?!at)[\w\.]+\ /;
    const fnName = functionRegex.exec(e.stack.split('\n')[2]) || ' anonymous ';
    return `${time} | ${location} |${fnName}| ${message.join(', ')}`;
};

let browser = (e)=>{    
    console.log(String(e).split('\n'))
    console.log(e.toString().split('\n'))
    console.log(e)
   // console.log(e)
    const locationRegex = /[\w]+\.[\w]+:[0-9]+/;    
    const location = locationRegex.exec(e.split('\n')[2]);
    const functionRegex = /(?![at\ ])[A-Za-z]+/;
    const fnName = functionRegex.exec(e.split('\n')[2]) || ' anonymous ';
    return {location,fnName}
}

let node = (e)=>{
    const locationRegex = /[\w]+\.[\w]+:[0-9]+/;    
    const location = locationRegex.exec(e.split('\n')[2]);
    const functionRegex = /\ {1}(?!at)[\w\.]+\ /;
    const fnName = functionRegex.exec(e.split('\n')[2]) || ' anonymous ';
    return {location,fnName}
}

let Log = (...message) => {
    let result 
    const e = new Error();
    const isNode = typeof window === 'undefined'
    const timeZone = Log.TIME_ZONE || isNode?process.env.TIME_ZONE:"Etc/UCT"
    const time = new Date().toLocaleString('en-US', { timeZone });    
    console.log(e.stack)
    const {location,fnName} = isNode?node(e.stack):browser(e.stack)
    console.log(`${time} | ${location} | ${fnName} | ${message.join(', ')}`);
};

Log.setTimeZone = (tz) => {
    Log.TIME_ZONE = tz;
};

export default Log

function main(){
    const e = new Error();
    console.log(e)
}

/* let genContent = (e, timeZone, ...message) => {
    const time = new Date().toLocaleString('en-US', { timeZone });
    message = message.map((msg) => (typeof msg === 'object' ? JSON.stringify(msg) : msg));
    //if (process && process.env.NODE_ENV === 'production') return `${time} | ${message.join(' ')}`;
    const locationRegex = /[\w]+\.[\w]+:[0-9]+/;
    console.log(e.stack)
    const location = locationRegex.exec(e.stack.split('\n')[2]);
    const functionRegex = /\ {1}(?!at)[\w\.]+\ /;
    const fnName = functionRegex.exec(e.stack.split('\n')[2]) || ' anonymous ';
    return `${time} | ${location} |${fnName}| ${message.join(', ')}`;
};


let Log = (...message) => {
    const e = new Error();
    //let timeZone = Log.TIME_ZONE || process.env.TIME_ZONE
    //const isNode = typeof window === 'undefined'
    const content = genContent(e, "America/Vancouver" , ...message);
    console.log(content);
};

function main(){
    Log("main")
}

main() */