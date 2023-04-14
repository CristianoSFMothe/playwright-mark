import { test, expect } from "@playwright/test";

test('deve pode cadastrar um nova tarefa',  async ({ page, request}) => {
  
  const tasnkName = 'Ler um livro de TypeScript';
  
  await request.delete('http://localhost:3333/helper/tasks/' + tasnkName)
  
  await page.goto('http://localhost:3000');
  
  const inputTaaksName = page.locator('input[class*=InputNewTask]');
  await inputTaaksName.fill(tasnkName);
  
  // await page.click('xpath=//button[contains(text(), "Create")]');
  await page.click('css=button >> text=Create');
})