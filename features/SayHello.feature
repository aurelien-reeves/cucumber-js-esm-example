Feature: Say Hello
  Scenario: It says hello to the world
    When I Say Hello
    Then it says hello to the world

  Scenario: It says hello to cucumber
    When I Say Hello 'Cucumber'
    Then it says 'Hello, Cucumber!'
