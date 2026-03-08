/**
 * Testes E2E — Página Site (Rubeus / APPRBS)
 * Baseado em DesafiosEnt/ANALISE-SITE-QUALIDADE-APPRBS.md
 * e em cenarios/evidencias/bugs/rubeus-site-apprbs.md
 *
 * Alguns testes podem FALHAR enquanto existirem bugs no sistema (ex.: CT-03 "Prencha", CT-06 "ornare.Class").
 * Isso é esperado: a automação serve para encontrar e regredir esses bugs. Quando o sistema for corrigido, os testes passam.
 */
import { test, expect } from '@playwright/test';

const SITE_PATH = '/site';

test.describe('Site (APPRBS) - Página institucional e Newsletter', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(SITE_PATH);
    await expect(page).toHaveURL(/\/site/);
  });

  test('CT-01: Página carrega com título e seção Newsletter visível', async ({ page }) => {
    await expect(page).toHaveTitle(/site/i);
    await expect(page.getByText(/não fique de fora|assine nossa newsletter/i).first()).toBeVisible({
      timeout: 10000,
    });
    await expect(
      page.getByRole('button', { name: /concluir/i }).or(page.getByRole('textbox', { name: /prencha|preencha este campo/i }))
    ).toBeVisible();
  });

  test('CT-02: Botão Concluir (Newsletter) está desabilitado com formulário vazio', async ({ page }) => {
    await page.getByText(/não fique de fora|assine nossa newsletter/i).first().scrollIntoViewIfNeeded();
    const btnConcluir = page.getByRole('button', { name: /concluir/i }).first();
    await expect(btnConcluir).toBeVisible();
    await expect(btnConcluir).toBeDisabled();
  });

  test('CT-03: Regressão — Placeholder do Nome (Newsletter) não deve conter "Prencha"', async ({ page }) => {
    // Falha enquanto o bug existir = bug encontrado. Após correção para "Preencha", o teste passa.
    await page.getByText(/assine nossa newsletter/i).first().scrollIntoViewIfNeeded();
    const campoNome = page.getByRole('textbox', { name: /prencha|preencha este campo/i }).first();
    await expect(campoNome).toBeVisible();
    const placeholder = await campoNome.getAttribute('placeholder');
    expect(placeholder?.toLowerCase()).not.toContain('prencha');
  });

  test('CT-04: Seletor de país (Newsletter) está presente', async ({ page }) => {
    await page.getByText(/assine nossa newsletter/i).first().scrollIntoViewIfNeeded();
    const combobox = page.getByRole('combobox', { name: /selected country|país|selecione/i });
    await expect(combobox).toBeVisible();
  });

  test('CT-05: Preencher Newsletter (Nome, Email, Telefone, País) — formulário aceita dados', async ({ page }) => {
    await page.getByText(/assine nossa newsletter/i).first().scrollIntoViewIfNeeded();
    await page.getByRole('textbox', { name: /prencha|preencha este campo/i }).first().fill('Teste E2E Site');
    await page.getByRole('combobox', { name: /selected country|país/i }).selectOption({ label: /brazil/i });
    await page.getByRole('textbox', { name: /96123|telefone/i }).fill('11961234567');
    await page.getByRole('textbox', { name: /email/i }).fill('teste@exemplo.com');

    const btnConcluir = page.getByRole('button', { name: /concluir/i }).first();
    await expect(btnConcluir).toBeVisible();
    await expect(page.getByRole('textbox', { name: /email/i })).toHaveValue('teste@exemplo.com');
  });

  test('CT-06: Regressão — Depoimentos não devem conter "ornare.Class" (falta espaço)', async ({ page }) => {
    // Falha enquanto o bug existir = bug encontrado. Após correção (espaço após ponto), o teste passa.
    await page.getByText(/o que nossos alunos dizem/i).first().scrollIntoViewIfNeeded();
    const pagina = await page.content();
    expect(pagina).not.toMatch(/ornare\.Class/i);
  });

  test('CT-07: Link EVENTOS no menu leva à seção PRÓXIMOS EVENTOS', async ({ page }) => {
    await page.getByRole('link', { name: /^eventos$/i }).first().click();
    await expect(page.getByText(/próximos eventos/i).first()).toBeVisible({ timeout: 5000 });
  });
});
