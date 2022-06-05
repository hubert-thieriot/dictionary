const build_expression_html = ({ title, phonetics, definition, examples }) => {

    examples_html = (examples) ?  (`<div class='examples'>
                <h3>Examples</h3>
                <div class='content'>${examples}</div>
            </div>`) : ''
    
    return `
    <div class='row justify-content-center mb-4'>
        <div class="col-lg-6">
            <div class="line me-auto mb-3 mt-3"></div>
            <div class='title'>
                <h2>${title}</h2>
            </div>
            <div class='definition'>
                ${definition}
            </div>
            ${examples_html}
        </div>
    </div>`
    

}
    

const fill_page = async () => {
  let response = await fetch(
    "definitions.json"
  );
  if (response.status != 200) {
    console.log("Error loading data");
  } else {
      let expressions = await response.json();
      fill_expressions(expressions);
  }
};

const fill_expressions = (expressions) => {
    // Create the HTML for each artist.
    const expressions_html = expressions.map(build_expression_html);

    // And add it for each HTML template to the body.
    expressions_html.forEach(expression_html => {
        document.getElementById('main').innerHTML += expression_html;
    });
};
