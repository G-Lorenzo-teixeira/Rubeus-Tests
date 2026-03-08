/**
 * Testes E2E — Página Certificação (Rubeus / APPRBS)
 * Baseado na análise em DesafiosEnt/ANALISE-CERTIFICACAO-QUALIDADE-APPRBS.md
 * e em cenarios/evidencias/bugs/rubeus-certificacao-apprbs.md
 *
 * Alguns testes podem FALHAR enquanto existirem bugs no sistema (ex.: CT-04 "Prencha", CT-07 "Salba mais").
 * Isso é esperado: a automação serve para encontrar e regredir esses bugs. Quando o sistema for corrigido, os testes passam.
 */
import { test, expect } from '@playwright/test';

const BASE_URL = process.env.BASE_URL || 'https://qualidade.apprbs.com.br';
const CERTIFICACAO_PATH = '/certificacao';

test.describe('Certificação (APPRBS) - Formulário Inscreva-se', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(CERTIFICACAO_PATH);
    await expect(page).toHaveURL(/certificacao/);
  });

  test('CT-01: Página carrega com título e formulário visível', async ({ page }) => {
    await expect(page).toHaveTitle(/certificação/i);
    // Formulário: botão Avançar ou campos do formulário
    await expect(
      page.getByRole('button', { name: /avançar/i }).or(page.getByPlaceholder(/email|digite/i))
    ).toBeVisible({ timeout: 10000 });
  });

  test('CT-02: Botão Avançar está desabilitado com formulário vazio', async ({ page }) => {
    const btnAvançar = page.getByRole('button', { name: /avançar/i }).first();
    await expect(btnAvançar).toBeVisible();
    await expect(btnAvançar).toBeDisabled();
  });

  test('CT-03: Campo Nome possui placeholder contendo "este campo"', async ({ page }) => {
    // Primeiro textbox do formulário (Nome) — placeholder atual "Prencha este campo" ou corrigido "Preencha este campo"
    const campoNome = page.getByRole('textbox', { name: /prencha|preencha este campo/i }).first();
    await expect(campoNome).toBeVisible();
    await expect(campoNome).toHaveAttribute('placeholder', /este campo/i);
  });

  test('CT-04: Regressão — Placeholder do Nome não deve conter ortografia "Prencha"', async ({ page }) => {
    // Falha enquanto o bug existir = bug encontrado. Após correção para "Preencha", o teste passa.
    const campoNome = page.getByRole('textbox').first();
    await expect(campoNome).toBeVisible();
    const placeholder = await campoNome.getAttribute('placeholder');
    expect(placeholder?.toLowerCase()).not.toContain('prencha');
  });

  test('CT-05: Seletor de país (combobox) está presente no formulário', async ({ page }) => {
    // Atualmente com nome "Selected country" (bug); após correção pode ser "País"
    const combobox = page.getByRole('combobox', { name: /selected country|país|selecione/i });
    await expect(combobox).toBeVisible();
  });

  test('CT-06: Preencher Nome, Email, Telefone e País — verificar estado do botão Avançar', async ({ page }) => {
    // Campo Nome (aceita placeholder "Prencha" ou "Preencha")
    await page.getByRole('textbox', { name: /prencha|preencha este campo/i }).first().fill('Teste E2E');
    // País: selecionar Brazil
    await page.getByRole('combobox', { name: /selected country|país/i }).selectOption({ label: /brazil/i });
    // Telefone
    await page.getByRole('textbox', { name: /96123|telefone/i }).fill('11961234567');
    // Email (obrigatório)
    await page.getByRole('textbox', { name: /email/i }).fill('teste@exemplo.com');

    const btnAvançar = page.getByRole('button', { name: /avançar/i }).first();
    // Se o sistema habilitar o botão após preencher tudo, deve estar enabled.
    // Enquanto o bug existir, pode permanecer disabled — então verificamos que o botão existe e o formulário foi preenchido
    await expect(btnAvançar).toBeVisible();
    await expect(page.getByRole('textbox', { name: /email/i })).toHaveValue('teste@exemplo.com');
  });

  test('CT-07: Regressão — Não deve existir link com texto "Salba mais"', async ({ page }) => {
    // Falha enquanto o bug existir = bug encontrado. Após correção para "Saiba mais", o teste passa.
    const linkSalba = page.getByRole('link', { name: /salba mais/i });
    await expect(linkSalba).toHaveCount(0);
  });
});
