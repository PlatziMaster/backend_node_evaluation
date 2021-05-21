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

  const buttonEdit = d.createElement('button');
  buttonEdit.innerText = 'Edit';

  buttonEdit.addEventListener('click', () => {
    if (buttonEdit.innerText === 'Edit') {
      buttonEdit.innerText = 'Save';
      buttonDelete.innerText = 'Cancel';
      input.disabled = false;
      return;
    }
    if (buttonEdit.innerText === 'Save') {
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

  const buttonDelete = d.createElement('button');
  buttonDelete.innerText = 'Delete';

  buttonDelete.addEventListener('click', () => {
    if (buttonDelete.innerText === 'Delete') {
      deleteCategory(category._id)
      .then(() => refreshCategoriesList())
      .catch(e => {
        console.log('Promise got the error:', e);
        displayError('Error deleting Category');
      });
      return;
    }
    if (buttonDelete.innerText === 'Cancel') {
      // Button also acts as 'Cancel Editing'.
      input.value = category.name;
      input.disabled = true;
      buttonDelete.innerText = 'Delete';
      buttonEdit.innerText = 'Edit';
      return;
    }
  });

  catItem.append( input );
  catItem.append( buttonEdit );
  catItem.append( buttonDelete );

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

async function deleteCategory(categoryId) {
  const tm = setTimeout(() => {
    displayError('There appears to be an error comunicating with API.');
  }, 3000);
  try {
    console.log('About to try deletion');
    await fetch(`/api/category/${categoryId}`, { method: 'DELETE' });
    console.log('Deletion tried');
    clearTimeout(tm);
    return;
  } catch (e) {
    clearTimeout(tm);
    console.log('Error catched', e);
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
    return;
  } catch (e) {
    clearTimeout(tm);
    throw e;
  }
}
