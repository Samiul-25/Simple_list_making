function addMovie() {
    var movieInput = document.getElementById('movieInput');
    var movieName = movieInput.value;
  
    if (movieName === '') {
      alert('Please enter a movie name.');
      return;
    }
  
    var movieList = document.getElementById('movieList');
    var li = document.createElement('li');
    li.appendChild(document.createTextNode(movieName));
    movieList.appendChild(li);
  
    movieInput.value = '';
  }
  