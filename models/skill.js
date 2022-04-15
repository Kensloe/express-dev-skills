const skills = [
    {id: 125223, skill: 'Feed Dogs', done: true},
    {id: 127904, skill: 'Learn Express', done: false},
    {id: 139608, skill: 'Buy Milk', done: false}
  ];
  
  module.exports = {
    getAll,
    getOne,
    deleteOne,
    create,
    update,
  };

  function update(id, newInfo) {
    id = parseInt(id);
    const skill = skills.find((skill) => skill.id === id);
    Object.assign(skill, newInfo);

  }

  function create(newSkill) {
    newSkill.id = Date.now() % 1000000;
    newSkill.done = false;
    skills.push(newSkill);
  }

  function deleteOne(id) {
    id = parseInt(id);
    const index = skills.findIndex((skill) => skill.id === id);
    skills.splice(index, 1);

  }
    function getOne(id) {
      id = parseInt(id);
      return skills.find((skill) => skill.id === id);
    }

  function getAll() {
    return skills;
  }