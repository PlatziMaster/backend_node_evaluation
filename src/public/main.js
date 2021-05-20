function displayError(err) {
  document.getElementById("errorMessage").innerText = err;
}

async function getCategories() {
  const tm = setTimeout(() => {
    displayError('There appears to be an error comunicating with API.');
  }, 3000);
  try {
    const resp = await fetch('/api/category', { method: 'GET' });
    const data = await resp.json();
    clearTimeout(tm);
    return data.body;
  } catch (e) {
    clearTimeout(tm);
    displayError('Error getting Categories');
  }
}

async function displayCategories() {
  const catsList = document.getElementById('categoriesList');
  const categories = await getCategories();
  if (categories && categories.length > 0) {
    catsList.innerHTML = '';
    categories.forEach(c => {
      const item = document.createElement('li')
      item.innerText = c.name;
      catsList.appendChild(item);
    });
  }
}

const newCatNameInput = document.getElementById('newCategoryNameInput');
const newCatButton = document.getElementById('newCategoryButton')
newCatButton.disabled = true;

// Enable Disable button.
newCatNameInput.addEventListener('change', function(e) {
  if (newCatNameInput.value.trim() && newCatButton.disabled) {
    newCatButton.disabled = false;
  }
  if (!newCatNameInput.value.trim() && !newCatButton.disabled) {
    newCatButton.disabled = true;
  }
});

async function createNewCategory(name) {
  const tm = setTimeout(() => {
    displayError('There appears to be an error comunicating with API.');
  }, 3000);
  try {
    await fetch('/api/category', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name: name })
    });
    clearTimeout(tm);
    displayCategories();
    newCatNameInput.value = '';
  } catch (e) {
    clearTimeout(tm);
    displayError('Error creating new Category');
  }
}

newCatButton.addEventListener('click', async function() {
  // Name Input should have something, otherwise button would be disabled.
  createNewCategory(newCatNameInput.value)
})

displayCategories();