const d = document;

const newCatNameInput = d.getElementById('newCategoryNameInput');
const newCatButton = d.getElementById('newCategoryButton');

newCatNameInput.addEventListener('change', function(e) {
  if (newCatNameInput.value.trim() && newCatButton.disabled) {
    newCatButton.disabled = false;
  }
  if (!newCatNameInput.value.trim() && !newCatButton.disabled) {
    newCatButton.disabled = true;
  }
});

newCatButton.addEventListener('click', async function() {
  // Name Input should have some value, otherwise button would be disabled.
  createNewCategory(newCatNameInput.value)
  .then(() => {
    refreshCategoriesList();
    newCatButton.disabled = true;
    newCatNameInput.value = '';
  })
});

// Initiate App.
refreshCategoriesList();

// ----- UI Helpers-----

function displayError(err) {
  d.getElementById("errorMessage").innerText = err;
}

// categorie: { name: String, _id: String }
function createCategoryElement(category) {
  const catItem = d.createElement('div');
  catItem.className = "categorieElement";

  const input = d.createElement('input');
  input.disabled = true; // Disable and css as normal text when editing element off.
  input.value = category.name;

  const button = d.createElement('button');
  button.innerText = 'Edit';

  button.addEventListener('click', () => {
    if (button.innerText === 'Edit') {
      button.innerText = 'Save';
      input.disabled = false;
      return;
    }
    if (button.innerText === 'Save') {
      if (input.value.trim()) {
        const categoryEdited = {
          name: input.value,
          _id: category._id
        };
        updateCategory(categoryEdited)
        .then(() => refreshCategoriesList())
        .catch(e => displayError('Error updating Category'));
      }
    }
  });

  catItem.append( input );
  catItem.append( button );

  return catItem;
}

async function refreshCategoriesList() {
  const catsListElement = d.getElementById('categoriesList');
  getCategories()
  .then(cats => {
    if (cats && cats.length > 0) {
      catsListElement.innerHTML = ''; // Empty list.
  
      cats.forEach(c => {
        catsListElement.appendChild( createCategoryElement(c) );
      });
  
    }
  })
  .catch(e => displayError('Error fetching categories.'));
}

// ----- API CALLS -----

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
  } catch (e) {
    clearTimeout(tm);
    throw e;
  }
}

// Returns a Categories array.
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
    throw e;
  }
}

// categorie: { name: String, _id: String }
async function updateCategory(category) {
  const tm = setTimeout(() => {
    displayError('There appears to be an error comunicating with API.');
  }, 3000);
  try {
    await fetch(`/api/category/${category._id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(category)
    });
    clearTimeout(tm);
  } catch (e) {
    clearTimeout(tm);
    throw e;
  }
}
