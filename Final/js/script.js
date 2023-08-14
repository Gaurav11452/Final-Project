function createGlobalHeader() {
    const headerDiv = document.createElement('header');
    headerDiv.innerHTML = `
    <div class="Js">
        <a href="index.html"><img src="./img/sample-logo.png" alt="Header Logo"></a>
        <nav>
        <menu> 
        <ul>
        <li>HOME</li>
        <li>|</li>
        <li>ABOUT</li>
        <li>|</li>
        <li>CONTACT</li>
        </ul>
        </menu>
        </nav>
        <form class="form">
        <input type="search" name="Search" placeholder="Search">
        </form>
        </div>
        `;
    document.body.prepend(headerDiv);
}
function createGlobalFooter() {
    const footerDiv = document.createElement('footer');
    footerDiv.innerHTML =
     ` <a href="index.html"><img src="./img/samplelogo.png" alt="FooterLogo"></a>
        <div class="JsFoot">
        <h2>Title</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta temporibus labore nisi consectetur nostrum ad repellat placeat sapiente iure quisquam eos alias dolores voluptas sequi voluptatibus, quod itaque nemo incidunt dignissimos adipisci esse. Debitis fugiat impedit nam beatae cumque in perspiciatis saepe illo odit, accusamus quos voluptate. Enim, nobis voluptas.</p>
        </div> 
        `;
        document.body.appendChild(footerDiv);
}
createGlobalHeader();
createGlobalFooter();