// initial population
pupulateList(dict);

function pupulateList(definitions) {

  let list = document.getElementById('list');

  // clear all child nodes
  while (list.firstChild) {
    list.removeChild(list.firstChild);
  }

  // loop over every word
  definitions.forEach( entry => {

    // create li
    let li = document.createElement('LI');
    li.classList.add('entry');

    // create word
    let word = document.createElement('P');
    word.textContent = entry['word'];
    if (entry['alternatives']) { // add alternatives
      entry['alternatives'].forEach( (item, i) => {
        // else they wont be sepated by spaces 
        word.textContent += `, ${entry['alternatives'][i].toString()}`;
      });
    }
    word.classList.add('word');
    li.insertAdjacentElement('beforeend', word);

    // create container for definitions, examples (and translations)
    let div = document.createElement('DIV');
    div.classList.add('stuff-container');

    // loop over definitions for that word
    if (entry['definitions']) {

      // create list for definitions
      let definitions = document.createElement('UL');
      definitions.classList.add('definition-list');

      entry['definitions'].forEach( def => {

        let definitionContainer = document.createElement('UL');
        definitionContainer.classList.add('definition-container');

        // create type
        let type = document.createElement('SPAN');
        type.textContent = def['type'];
        type.classList.add('type');
        definitionContainer.insertAdjacentElement('beforeend', type);

        // create definition
        let definition = document.createElement('SPAN');
        definition.textContent = def['definition'];
        definition.classList.add('definition');
        definitionContainer.insertAdjacentElement('beforeend', definition);

        definitions.insertAdjacentElement('beforeend', definitionContainer);

      });

      // add list of definitions to li
      div.insertAdjacentElement('beforeend', definitions);

    }

    // loop over examples examples
    if (entry['exampleUses']){

      let examples = document.createElement('DIV');
      examples.classList.add('examples');

      entry['exampleUses'].forEach( example => {

        let p = document.createElement('P');
        p.textContent = '"' + example + '"';
        examples.insertAdjacentElement('beforeend', p);

      }); // examples foreach

      div.insertAdjacentElement('beforeend', examples);

    } // if examples

    // add div containing examples and definitions to li
    li.insertAdjacentElement('beforeend', div);

    // add everything to html
    list.insertAdjacentElement('beforeend', li);

  }); // entries

} // func
