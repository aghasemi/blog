
const loadCSS = (url, callback) => {
    var el = document.createElement("link");
    el.href = url;
    el.rel = "stylesheet";
    el.type = "text/css";
    document.head.appendChild(el);
    if(typeof(callback) == "function") {
        el.onload = callback(el);
    }
    return el;
}

function tryParseJson(jsonString, defaultObject) {
    try {
        return JSON.parse(jsonString);
    } catch (e) {
        return defaultObject;
    }
}

let config = undefined
let pages = undefined

const renderFromAnchor = async () => {
	
	if(config===undefined) {
		config =  tryParseJson(await (await fetch(`./config.json`)).text(), {})
		const styleFile = config['styleFile'] || './css/styles.css'
		loadCSS(styleFile)
	}

	if(pages===undefined) {
		const contentFile = config['content'] || './Content.md' 
		pages =  (await (await fetch(contentFile)).text()).split('\n## ').map( (page, index) => {
			return {
				"content": marked.parse((index>0 ?  '## ':'') + page),
				"title":  index>0 ?  page.split('\n')[0].trim() : 'Home',
				"anchor": "A"+(index+1000)
			}
		} )


	
		const siteName = config['siteName'] || ''
		const copyrightMarkdown = config['copyrightNotice'] || ''
		
		document.getElementById('my-name').innerHTML = siteName
		document.getElementById('copyright-holder').innerHTML = marked.parseInline(copyrightMarkdown)
		document.getElementById('pages').innerHTML =''

		
		pages.forEach( (page,i) => {
			const pageAnchor = page['anchor']; //Remove all whitespaces
			const pageTitle = page['title'];
			document.getElementById('pages').innerHTML += `<a class="list-group-item list-group-item-action list-group-item-light p-3" href="#${pageAnchor}" >${pageTitle}</a>\n`
		});
	}
	
	
	const hash = window.location.hash
	const currentPageAnchor = hash.length===0 ? pages[0]['anchor']:  hash.substring(1)
	const currentPageIndex =  parseInt(currentPageAnchor.substring(1)) - 1000
	const currentPageContent = pages[currentPageIndex]['content'] //Default path. Will be used if an array is given as list
	const currentPageTitle = pages[currentPageIndex]['title']

	

	document.title =  config['siteName']===undefined ? currentPageTitle : `${config['siteName']} - ${currentPageTitle}`;
	document.getElementById('content').innerHTML = currentPageContent;
	document.getElementById('page-title').innerHTML = currentPageTitle

	if (currentPageIndex===0 && (config['showTOC'] || false)) //Home
	{
		console.log('ToC being created')
		document.getElementById('content').innerHTML += '<ul>'

		pages.slice(1).forEach( (page,i) => {
			const pageAnchor = page['anchor']; //Remove all whitespaces
			const pageTitle = page['title'];
			
			document.getElementById('content').innerHTML += `<li><a class="p-3" href="#${pageAnchor}" >${pageTitle}</a></li>\n`
		});

		document.getElementById('content').innerHTML += '</ul>'
	}

	
}

window.addEventListener('hashchange', () => renderFromAnchor())

window.addEventListener('DOMContentLoaded', event => {

	const sidebarToggle = document.body.querySelector('#sidebarToggle');
    if (sidebarToggle) {
        
        sidebarToggle.addEventListener('click', event => {
            event.preventDefault();
            document.body.classList.toggle('sb-sidenav-toggled');
            localStorage.setItem('sb|sidebar-toggle', document.body.classList.contains('sb-sidenav-toggled'));
        });
    }

	document.getElementById('pages').addEventListener('click', event => {
		const isMobile = ! window.matchMedia('(min-width: 768px)').matches;
		if (isMobile) document.body.classList.toggle('sb-sidenav-toggled');
	});

});


window.onload = () => renderFromAnchor()

