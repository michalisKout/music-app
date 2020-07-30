const CRM_TOOLS = {
  'lead': () => leadTool(),
  'createWrite': () => createWrite(),
}

function leadTool() {
   console.log('lead tooolings');  
}

function createWrite() {
   console.log('creating writer');  
}

class orfiumSupportCRM {
  static applyTool(toolName) {
    const toolExistsInList = Object.keys(CRM_TOOLS).some(name => name === toolName);
    const crmTool = CRM_TOOLS[toolName];
    
    if(!toolExistsInList) {
      throw new Error('No tool exists with name: '+toolName);
    }
    
    return crmTool();
    
  }
}

Object.defineProperty(window, 'orfiumSupportCRM', {
    value: orfiumSupportCRM,
    writable: false
});
