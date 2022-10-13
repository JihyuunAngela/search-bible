document.querySelector('#find-verse').addEventListener('click', getVerse)
document.querySelector('#keyword-verse').addEventListener('click', getKeywordVerses)


function getVerse(){
  const book = document.querySelector('#book').value
  const chapter = document.querySelector('#chapter').value
  const verse = document.querySelector('#verse').value
  
  const url = `https://bible-api.com/${book} ${chapter}:${verse}?translation=kjv`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        
        console.log(data)
        document.querySelector("p").innerHTML = ""
        document.querySelector("ul").innerHTML = ""

        document.querySelector('#input-verse').innerHTML = data.text
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

function getKeywordVerses() {
  const keyword = document.querySelector('#keyword').value
  const ul = document.querySelector('ul')

  const url = `https://api.biblia.com/v1/bible/search/KJV1900.js?query=${keyword}&mode=verse&start=0&limit=5&key=486bef3870a4a79c46203bd342b59ebe`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        
        document.querySelector("p").innerHTML = ""

          document.querySelector("ul").innerHTML = ""
          data.results.forEach ( obj => {
            const li = document.createElement('li')
            li.textContent = `${obj.title} - ${obj.preview}`
            document.querySelector('ul').appendChild(li)
          })
      })
      .catch(err => {
          console.log(`error ${err}`)
      });


}
