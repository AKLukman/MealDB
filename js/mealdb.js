// Display food
const displayFood = (searchText) => {
  const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
  fetch(url)
    .then(res => res.json())
    .then(data => dispalyFishMeals(data.meals))
}

displayFood('fish');

const dispalyFishMeals = meals => {
  // console.log(meals);
  const fishInfo = document.getElementById('fish-info');


  meals?.forEach(meal => {
    const div = document.createElement('div');
    div.classList.add('col');
    div.innerHTML = `
          <div onclick="mealDetails(${meal.idMeal})" class="card">
          <img width="200px" src="${meal.strMealThumb}" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">${meal.strMeal}</h5>
            <p class="card-text">${meal.strInstructions.slice(0, 200)}.</p>
          </div>
        </div>
          `
    fishInfo.appendChild(div);
  })

}

// Spinner

const toggleSpinner = dispalyStyle => {
  document.getElementById('spinner').style.display = dispalyStyle;
}

// Search result
const toggleSearchResult = dispalyStyle => {
  document.getElementById('fish-info').style.display = dispalyStyle;
}

// Search Food

const searchFood = () => {
  const searchField = document.getElementById('search-field');
  toggleSpinner('block');
  toggleSearchResult('none');
  const searchText = searchField.value;
  searchField.value = '';
  if (searchText == '') {
    const searchResult = document.getElementById('fish-info');
    searchResult.innerHTML = `<p class="text-danger mx-auto">Please write something to display</p>`;
  } else {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;

    fetch(url)
      .then(res => res.json())
      .then(data => displaySearchResult(data.meals))
  }

}



// showing search result
const displaySearchResult = meals => {
  const searchResult = document.getElementById('fish-info');
  searchResult.textContent = '';

  if (!meals) {
    searchResult.innerHTML = `<p class="text-danger mx-auto">No result founded</p>`;
  } else {
    meals?.forEach(meal => {
      // console.log(meal)
      const div = document.createElement('div');
      div.classList.add('col')
      div.innerHTML = `
              <div onclick="mealDetails(${meal.idMeal})" class="card">
              <img width="200px" src="${meal.strMealThumb}" class="card-img-top" alt="...">
              <div class="card-body">
                <h5 class="card-title">${meal.strMeal}</h5>
                <p class="card-text">${meal.strInstructions.slice(0, 200)}.</p>
              </div>
            </div>
              `;
      searchResult.appendChild(div);
    });
  }

  toggleSpinner('none');
  toggleSearchResult('flex');
}

// single meal information
const mealDetails = mealId => {

  const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`;
  fetch(url)
    .then(res => res.json())
    .then(data => displayMealDetails(data.meals[0]))

}

const displayMealDetails = meal => {

  const mealDetails = document.getElementById('meal-detail');
  const div = document.createElement('div');
  div.classList.add('card');
  div.innerHTML = `
<img width="50px" src="${meal.strMealThumb}" class="card-img-top" alt="...">
<div class="card-body">
  <h5 class="card-title">${meal.strMeal ? meal.strMeal : ''}</h5>
  <p class="card-text">${meal.strInstructions.slice(0, 150)}.</p>
  <a href="${meal.strYoutube}" class="btn btn-primary">Go somewhere</a>
</div>
  `;
  mealDetails.appendChild(div);
}

