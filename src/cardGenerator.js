const managerCard = Manager => {
    return ` 
<div class="card">
    <div class="name">
        <h2>${Manager.name}</h2>
        <div class="role" >MANAGER <i class="fa fa-users"></i></div>
    </div>
    <div class="card-info">
        <div class="card-info-content">
            <div>ID: ${Manager.id}</div>
            <div>EMAIL: ${Manager.email}</div>
            <div>OFFICE NUM: ${Manager.officeNumber}</div>
        </div>
    </div>
</div>`
}

const engineerCard = Engineer => {
    return ` 
<div class="card">
    <div class="name">
        <h2>${Engineer.name}</h2>
        <div class="role" >Engineer <i class="fa fa-laptop"></i></div>
    </div>
    <div class="card-info">
        <div class="card-info-content">
            <div>ID: ${Engineer.id}</div>
            <div>EMAIL: ${Engineer.email}</div>
            <div>GITHUB: ${Engineer.githubProfile}</div>
        </div>
    </div>
</div>`
}

const internCard = Intern => {
    return ` 
<div class="card">
    <div class="name">
        <h2>${Intern.name}</h2>
        <div class="role" >Intern <i class="fa fa-school"></i></div>
    </div>
    <div class="card-info">
        <div class="card-info-content">
            <div>ID: ${Intern.id}</div>
            <div>EMAIL: ${Intern.email}</div>
            <div>School: ${Intern.officeNumber}</div>
        </div>
    </div>
</div>`
}

const customCard = Other => {
    return ` 
<div class="card">
    <div class="name">
        <h2>${Other.name}</h2>
        <div class="role" >${Other.custom}<i class="fa fa-star"></i></div>
    </div>
    <div class="card-info">
        <div class="card-info-content">
            <div>ID: ${Other.id}</div>
            <div>EMAIL: ${Other.email}</div>
            <div>GITHUB: ${Other.githubProfile}</div>
        </div>
    </div>
</div>`
}

module.exports = cardGenerator;