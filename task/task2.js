// Task 2. Make external links orange
function makeTest2() {
    let testContent = document.createElement('div');
    testContent.id = 'test2';
    testContent.innerHTML = '  <a name="list">The list:</a><ul>    <li><a href="http://google.com">http://google.com</a></li>    <li><a href="/tutorial">/tutorial.html</a></li>    <li><a href="local/path">local/path</a></li>    <li><a href="ftp://ftp.com/my.zip">ftp://ftp.com/my.zip</a></li>    <li><a href="http://nodejs.org">http://nodejs.org</a></li>    <li><a href="http://internal.com/test">http://internal.com/test</a></li>  </ul>';
    document.body.append(testContent);
}
function removeTest2() {
    document.body.removeChild(test2);
}
function cororizeTest2() {
	for(let a of test2.querySelectorAll('[href*="://"]')) {
		if(!a.href.includes('http://internal.com')) a.style.color = 'orange';
	}
}
// Done.