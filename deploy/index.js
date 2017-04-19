let fs = require('fs');
let yaml = require('js-yaml');
let walk = require('klaw-sync')
let path = require('path');
let frontmatter = require('front-matter');
let _ = require('lodash');

console.log("Starting Build");
try
{

    console.log("Checking Spec")
    
    // load spec
    let raw = fs.readFileSync(__dirname + '/../course/config/spec.yaml');
    let spec = yaml.safeLoad(raw);
    console.log('✔ spec.yaml');

    // load hubs
    raw = fs.readFileSync(__dirname + '/../course/config/hubs.yaml');
    spec = yaml.safeLoad(raw);
    console.log('✔ hubs.yaml');

    // load questions
    //langs:
    let files = fs.readdirSync(__dirname + '/../course/config/questions');
    for (let f of files)
    {
        raw = fs.readFileSync(__dirname + '/../course/config/questions/' + f);
        spec = yaml.safeLoad(raw);
        console.log('✔ questions/' + f);    
    }

    let domain = 'https://' + fs.readFileSync('CNAME');

    console.log("Replacing Links")

    // Find / Replace assets in the content:
    let paths = walk(__dirname + '/../course/content/',{nodir: true, ignore: 'media'});
    for (let p of paths)
    {
        let contents = fs.readFileSync(p.path).toString();
        contents = contents.replace(/{{site\.baseurl}}/g,domain);
        fs.writeFileSync(p.path, contents);
    }

    console.log("Generate Page List")
    let links = [];
    for (let p of paths)
    {
        if (path.extname(p.path) == '.md')
        {
            // console.log(p);
            let pa = path.dirname(p.path).split(path.sep)
            let fm = {
                attributes:{
                    title: pa.pop() + "-" + pa.pop() + "-" + path.basename(p.path)
                }
            };
            try
            {
                fm = frontmatter(fs.readFileSync(p.path));
            }
            catch (e)
            {
                
            }

            links.push({
                text: fm.attributes.title,
                href: p.path.replace(path.resolve(__dirname,'..'),'')
            });
        }
    }
    fs.writeFileSync('links.jsonp',"----\n----\ncallback(" + JSON.stringify(links) + ")");

    console.log("Finished Build");
}
catch (e)
{
    console.error(e);
    process.exit(1);
}