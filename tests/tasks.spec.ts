import { test, expect } from "@playwright/test";
import { faker} from "@faker-js/faker";

test('deve pode cadastrar um nova tarefa',  async ({ page}) => {
  
  await page.goto('http://localhost:3000');
  
  const inputTaaksName = page.locator('input[class*=InputNewTask]');
  await inputTaaksName.fill(faker.lorem.word());
  
  // await page.click('xpath=//button[contains(text(), "Create")]');
  await page.click('css=button >> text=Create');
})