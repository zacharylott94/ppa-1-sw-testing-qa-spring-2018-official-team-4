var cyHost;

//set vars for production or developement
if(Cypress.env('env') == "production"){
        cyHost = 'https://production-dot-ppa2-app.appspot.com/'
}else if(Cypress.env('env') == "development"){
    cyHost = 'https://development-dot-ppa2-app.appspot.com/'
}else{
       cyHost = 'http://localhost:8080/'
   }
describe('Navigation test', function(){
    it('Tests the ability to move beteween calculators', function(){
        // -visit the page
        cy.visit(cyHost);
        // - navigate to correct page
        cy.get('button').contains('BMI').click()
        cy.get('button').contains('Distance').click()
        cy.get('button').contains('Email').click()
        cy.get('button').contains('Retirement').click()
        cy.get('button').contains('Tip').click()
    })
})
describe('Retirement page test', function(){
    it('Test retirement function', function(){
        // -visit the page
        cy.visit(cyHost);
        // - navigate to correct page
        cy.get('button').contains('Retirement').click()
        // - fill input bars
        cy.get('input[name = "age"]').type(21)
        cy.get('input[name = "salary"]').type(40000)
        cy.get('input[name = "rate"]').type(.8)
        cy.get('input[name = "goal"]').type(800000)
        // -ensure that the inputs calculate
        cy.get('button[name = "rbutton"]').contains('Calculate!').click()
        cy.get('p[name = "rresult"]').contains(40)
    })
})
describe('BMI page test', function(){
    it('Test retirement function', function(){
        // -visit the page
        cy.visit(cyHost);
        // - navigate to correct page
        cy.get('button').contains('BMI').click()
        // - fill input bars
        cy.get('input[name = "height"]').type("6'2")
        cy.get('input[name = "weight"]').type(240)
        // -ensure that the inputs calculate
        cy.get('button[name = "bbutton"]').contains('Calculate!').click()
        cy.get('p[name = "bresult"]').contains(31.6)
    })
})
describe('Distance page test', function(){
    it('Test retirement function', function(){
        // -visit the page
        cy.visit(cyHost);
        // - navigate to correct page
        cy.get('button').contains('Distance').click()
        // - fill input bars
        cy.get('input[name = "x1"]').type(4)
        cy.get('input[name = "y1"]').type(2)
        cy.get('input[name = "x2"]').type(4)
        cy.get('input[name = "y2"]').type(4)
        // -ensure that the inputs calculate
        cy.get('button[name = "dbutton"]').contains('Calculate!').click()
        cy.get('p[name = "dresult"]').contains(2)
        })
    })
describe('Email page test', function(){
    it('Test retirement function', function(){
        // -visit the page
        cy.visit(cyHost);
        // - navigate to correct page
        cy.get('button').contains('Email').click()
        // - fill input bars
        cy.get('input[name = "email"]').type("bob@test.com")
        // -ensure that the inputs calculate
        cy.get('button[name = "ebutton"]').contains('Verify!').click()
        cy.get('p[name = "eresult"]').contains("valid")
    })
})
describe('Tip Split page test', function(){
    it('Test retirement function', function(){
        // -visit the page
        cy.visit(cyHost);
        // - navigate to correct page
        cy.get('button').contains('Tip').click()
        // - fill input bars
        cy.get('input[name = "numGuest"]').type(4)
        cy.get('input[name = "cost"]').type(32)
        // -ensure that the inputs calculate
        cy.get('button[name = "sbutton"]').contains('Calculate!').click()
        cy.get('p[name = "sresult"]').contains(9.20)
    })
})