const uuidlib= require('uuid');
  
function generateId() {
	        return uuidlib.v3('8F4KOpH3cu', uuidlib.v4());
	}

module.exports = generateId
