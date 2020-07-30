console.log('CRM TOOL INITIALIAZE');

const CRM_TOOLS = {
  'lead': () => leadTool(),
  'createWrite': (writer) => createWriter(writer),
}

const writerTemplate = ({name, surname, id}) => `<div class="writer">
        <h1>${name}</h1>
        <h1>${surname}</h1>
        <h1>${id}</h1>
</div>`;
  
  
function leadTool() {
   console.log('lead tooolings');  
}

function createWriter(writer) {
  document.getElementById('writers-container').insertAdjacentHTML('afterbegin', writerTemplate(writer));
}

class orfiumSupportCRM {
 
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

Object.defineProperty(window, 'orfiumSupportCRM', {
    value: orfiumSupportCRM,
    writable: false
});
