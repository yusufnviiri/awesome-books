const mainContent = document.querySelector('.main-content');

mainContent.innerHTML = `
<h1>Awesome books</h1>
<div class="removeBook">
<p>Lorem ipsum</p>
<p>Testeroo Testyy</p>
<button type="button">Remove</button>
</div>
<div class="removeBook">
<p>Lorem ipsum</p>
<p>Testeroo Testyy</p>
<button type="button">Remove</button>
</div>

<div class="addBook">
<input type="text" placeholder="Title"><br>
<input type="text" placeholder="Author"><br>
<button type="button">Add</button>
</div>
`