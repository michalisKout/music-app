console.log('CRM TOOL INITIALIAZE');

const CRM_TOOLS = {
  'lead': () => leadTool(),
  'createWrite': (containerId, writer) => createWriter(containerId, writer),
}

const writerTemplate = ({name, surname, id}) => `<div id='${id}' class="writer">
        <h1>${name}</h1>
        <h1>${surname}</h1>
        <h1>${id}</h1>
        <button onclick="removeWriter(this)">Delete Writer</button>
</div>`;
  
  
function leadTool() {
   console.log('lead tooolings');  
}

function createWriter(containerId = 'writers-container', writer) {
  document.getElementById(containerId).insertAdjacentHTML('afterbegin', writerTemplate(writer));
}

function removeWriter(element) {
  document.getElementById(element.parentElement.id).remove();
}

class OrfiumSupportCRM {
 
  static logAvailableTools() {
    console.log(Object.keys(CRM_TOOLS));
  }
  
  static applyTool(toolName) {
    const toolExistsInList = Object.keys(CRM_TOOLS).some(name => name === toolName);
    const crmTool = CRM_TOOLS[toolName];
    
    if(!toolExistsInList) {
      throw new Error('No tool exists with name: '+toolName);
    }
    
    return crmTool;
  }
}

Object.defineProperty(window, 'OrfiumSupportCRM', {
    value: OrfiumSupportCRM,
    writable: false
});
