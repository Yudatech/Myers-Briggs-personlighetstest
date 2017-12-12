// Add two extra methods to the built inArray class
// (you can use the same approach when adding extra
//  methods to any class)

// The purpose of these methods is to easily
// render the html for a whole list of objects
// (se the Base class for a better understanding)

Object.assign(Array.prototype, {
    
      // Collect html from all items
      // that have a method html()
      html(templateNo = '') {
        let html = '';
        for(let item of this){
          if(item.html){
            html += item.html(templateNo);
          }
        }
        return html;
      },
    
      // Render the result of calling html()
      // to a certain element in the DOM
      render(selector, templateNo = ''){
        $(selector).html(this.html(templateNo));
      }
    
    });
    