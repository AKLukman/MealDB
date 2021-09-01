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
    meals.forEach(meal => {
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
        <div class="card">
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

// Search Food

const searchFood = () => {
    const searchText = document.getElementById('search-field').value;

    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;

    fetch(url)
        .then(res => res.json())
        .then(data => displaySearchResult(data.meals))
}
const displaySearchResult = meals => {
    const searchResult = document.getElementById('fish-info');
    searchResult.textContent = '';
    meals.forEach(meal => {

        const div = document.createElement('div');
        div.classList.add('col')
        div.innerHTML = `
        <div class="card">
        <img width="200px" src="${meal.strMealThumb}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${meal.strMeal}</h5>
          <p class="card-text">${meal.strInstructions.slice(0, 200)}.</p>
        </div>
      </div>
        `;
        searchResult.appendChild(div);

    })
}

