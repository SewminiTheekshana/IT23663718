const { test, expect } = require("@playwright/test");

const URL = "https://www.swifttranslator.com/";
const INPUT = "textarea";

// ================= Reusable Function =================
async function getSinhalaTranslation(page, singlishText) {
  await page.goto(URL);
  await page.fill(INPUT, singlishText);
  await page.waitForTimeout(20000);

  const fullText = await page.textContent("body");
  const match = fullText.match(/Sinhala\s*([අ-ෆ].+?)(?:🔁|Clear|English)/);
  return match ? match[1].trim() : null;
}

// ================= Result Checker =================
function checkResult(actual, expected, testName, isNegative = false) {
  if (!isNegative && actual === expected) {
    console.log(`✅ ${testName} Passed`);
  } else if (isNegative && actual !== expected) {
    console.log(`✅ ${testName} Failed as Expected`);
  } else {
    console.log(`❌ ${testName} Failed`);
    console.log("Expected:", expected);
    console.log("Actual  :", actual);
  }
}

/* ===================================================
   ✅ POSITIVE FUNCTIONAL TEST CASES (24) 
=================================================== */

test("Pos_Fun_0001", async ({ page }) => {
  const actual = await getSinhalaTranslation(page, "Obata suba udhaeesanak veevaa!");
  const expected = "ඔබට සුබ උදෑසනක් වේවා!";
  checkResult(actual, expected, "Pos_Fun_0001");
  expect(actual).toBe(expected);
});

test("Pos_Fun_0002", async ({ page }) => {
  const actual = await getSinhalaTranslation(
    page,
    "mata vathura glass ekak dhenna.",
  );
  const expected = "මට වතුර glass එකක් දෙන්න.";
  checkResult(actual, expected, "Pos_Fun_0002");
  expect(actual).toBe(expected);
});

test("Pos_Fun_0003", async ({ page }) => {
  const actual = await getSinhalaTranslation(
    page,
    "iiye mama pansal giyaa upandhinaya nisaa.",
  );
  const expected = "ඊයෙ මම පන්සල් ගියා උපන්දිනය නිසා.";
  checkResult(actual, expected, "Pos_Fun_0003");
  expect(actual).toBe(expected);
});

test("Pos_Fun_0004", async ({ page }) => {
  const actual = await getSinhalaTranslation(
    page,
    "heta api PickMe eken yamu.",
  );
  const expected = "හෙට අපි PickMe එකෙන් යමු.";
  checkResult(actual, expected, "Pos_Fun_0004");
  expect(actual).toBe(expected);
});

test("Pos_Fun_0005", async ({ page }) => {
  const actual = await getSinhalaTranslation(
    page,
    "vaessa naeththam api match eka gahamu.",
  );
  const expected = "වැස්ස නැත්නම් අපි match එක ගහමු.";
  checkResult(actual, expected, "Pos_Fun_0005");
  expect(actual).toBe(expected);
});

test("Pos_Fun_0006", async ({ page }) => {
  const actual = await getSinhalaTranslation(
    page,
    "oyaa kaeema ganna saha bill eka gewanna.",
  );
  const expected = "ඔයා කෑම ගන්න සහ bill එක ගෙවන්න.";
  checkResult(actual, expected, "Pos_Fun_0006");
  expect(actual).toBe(expected);
});

test("Pos_Fun_0007", async ({ page }) => {
  const actual = await getSinhalaTranslation(page, "oyaata dhaen asaniipaya thathvaya kohomadha?");
  const expected = "ඔයාට දැන් අසනීපය තත්වය කොහොමද?";
  checkResult(actual, expected, "Pos_Fun_0007");
  expect(actual).toBe(expected);
});

test("Pos_Fun_0008", async ({ page }) => {
  const actual = await getSinhalaTranslation(page, "mata meeka karanna baee.");
  const expected = "මට මේක කරන්න බෑ.";
  checkResult(actual, expected, "Pos_Fun_0008");
  expect(actual).toBe(expected);
});

test("Pos_Fun_0009", async ({ page }) => {
  const actual = await getSinhalaTranslation(
    page,
    "eyaalaa okkoma adha enavaa.",
  );
  const expected = "එයාලා ඔක්කොම අද එනවා.";
  checkResult(actual, expected, "Pos_Fun_0009");
  expect(actual).toBe(expected);
});

test("Pos_Fun_0010", async ({ page }) => {
  const actual = await getSinhalaTranslation(
    page,
    "meeka patta siraavatama.",
  );
  const expected = "මේක පට්ට සිරාවටම.";
  checkResult(actual, expected, "Pos_Fun_0010");
  expect(actual).toBe(expected);
});

test("Pos_Fun_0011", async ({ page }) => {
  const actual = await getSinhalaTranslation(
    page,
    "mage laptop ekee display eka giyaa.",
  );
  const expected = "mage laptop එකේ display එක ගියා.";
  checkResult(actual, expected, "Pos_Fun_0011");
  expect(actual).toBe(expected);
});

test("Pos_Fun_0012", async ({ page }) => {
  const actual = await getSinhalaTranslation(
    page,
    "adha raeeta online teams lecture ekak thiyenavaa. oyaata puluvannam enna. naeththam record eka balanna. samaharavita api lecture eka ivaravelaa project eka gaenath kathaa karanavaa.",
  );
  const expected = "අද රෑට online teams lecture එකක් තියෙනවා. ඔයාට පුලුවන්නම් එන්න. නැත්තම් record එක බලන්න. සමහරවිට අපි lecture එක ඉවරවෙලා project එක ගැනත් කතා කරනවා.";
  checkResult(actual, expected, "Pos_Fun_0012");
  expect(actual).toBe(expected);
});

test("Pos_Fun_0013", async ({ page }) => {
  const actual = await getSinhalaTranslation(
    page,
    "adha lecture eka 9.30 am valata patan gannavaa.",
  );
  const expected = "අද lecture එක 9.30 am වලට පටන් ගන්නවා.";
  checkResult(actual, expected, "Pos_Fun_0013");
  expect(actual).toBe(expected);
});

test("Pos_Fun_0014", async ({ page }) => {
  const actual = await getSinhalaTranslation(
    page,
    "mee kalisama Rs. 2000 k venava.",
  );
  const expected = "මේ කලිසම Rs. 2000 ක් වෙනව.";
  checkResult(actual, expected, "Pos_Fun_0014");
  expect(actual).toBe(expected);
});

test("Pos_Fun_0015", async ({ page }) => {
  const actual = await getSinhalaTranslation(
    page,
    "hemin hemin aethuLata enna.",
  );
  const expected = "හෙමින් හෙමින් ඇතුළට එන්න.";
  checkResult(actual, expected, "Pos_Fun_0015");
  expect(actual).toBe(expected);
});

test("Pos_Fun_0016", async ({ page }) => {
  const actual = await getSinhalaTranslation(page, "mage NIC eka dhenna.");
  const expected = "mage NIC එක දෙන්න.";
  checkResult(actual, expected, "Pos_Fun_0016");
  expect(actual).toBe(expected);
});

test("Pos_Fun_0017", async ({ page }) => {
  const actual = await getSinhalaTranslation(
    page,
    "karuNaakaralaa mata udhavvak karanna.",
  );
  const expected = "කරුණාකරලා මට උදව්වක් කරන්න.";
  checkResult(actual, expected, "Pos_Fun_0017");
  expect(actual).toBe(expected);
});

test("Pos_Fun_0018", async ({ page }) => {
  const actual = await getSinhalaTranslation(
    page,
    "mata thel 100 ml dhenna.",
  );
  const expected = "මට තෙල් 100 ml දෙන්න.";
  checkResult(actual, expected, "Pos_Fun_0018");
  expect(actual).toBe(expected);
});

test("Pos_Fun_0019", async ({ page }) => {
  const actual = await getSinhalaTranslation(
    page,
    "assignment eka ivara karalaa mama yanavaa.",
  );
  const expected =
    "assignment එක ඉවර කරලා මම යනවා.";
  checkResult(actual, expected, "Pos_Fun_0019");
  expect(actual).toBe(expected);
});

test("Pos_Fun_0020", async ({ page }) => {
  const actual = await getSinhalaTranslation(
    page,
    "oya adha enavadha maath ekka aevidhinna ?",
  );
  const expected =
    "ඔය අද එනවද මාත් එක්ක ඇවිදින්න ?";
  checkResult(actual, expected, "Pos_Fun_0020");
  expect(actual).toBe(expected);
});

test("Pos_Fun_0021", async ({ page }) => {
  const actual = await getSinhalaTranslation(
    page,
    "iiyee exam eka godak amaaruyi.",
  );
  const expected = "ඊයේ exam එක ගොඩක් අමාරුයි.";
  checkResult(actual, expected, "Pos_Fun_0021");
  expect(actual).toBe(expected);
});

test("Pos_Fun_0022", async ({ page }) => {
  const actual = await getSinhalaTranslation(
    page,
    "mata python code eka email karanna puluvandha?",
  );
  const expected = "මට python code එක email කරන්න පුළුවන්ද?";
  checkResult(actual, expected, "Pos_Fun_0022");
  expect(actual).toBe(expected);
});

test("Pos_Fun_0023", async ({ page }) => {
  const actual = await getSinhalaTranslation(
    page,
    "bas eka parakku nisaa mama dhuvala giyaa.",
  );
  const expected = "බස් එක පරක්කු නිසා මම දුවල ගියා.";
  checkResult(actual, expected, "Pos_Fun_0023");
  expect(actual).toBe(expected);
});

test("Pos_Fun_0024", async ({ page }) => {
  const actual = await getSinhalaTranslation(
    page,
    "aayuboovan! oyaata kohomadha? hodhin innavadha ?",
  );
  const expected =
    "අයුබොවන්! ඔයාට කොහොමද? හොදින් ඉන්නවද ?";
  checkResult(actual, expected, "Pos_Fun_0024");
  expect(actual).toBe(expected);
});

/* ===================================================
   ❌ NEGATIVE FUNCTIONAL TEST CASES (11)
=================================================== */

test("Neg_Fun_0001", async ({ page }) => {
  const actual = await getSinhalaTranslation(page, "mamahetakaempassekatayannahithuvee");
  const expected = "මම හෙට කැම්පස්සෙකට යන්න හිතුවේ.";
  checkResult(actual, expected, "Neg_Fun_0001", true);
  expect(actual).toBe(expected);
});

test("Neg_Fun_0002", async ({ page }) => {
  const actual = await getSinhalaTranslation(
    page,
    "mge whatsapp ekt msg ekk dnnko",
  );
  const expected = "mage whatsapp එකට message එකක් දාන්නකෝ";
  checkResult(actual, expected, "Neg_Fun_0002", true);
  expect(actual).toBe(expected);
});

test("Neg_Fun_0003", async ({ page }) => {
  const actual = await getSinhalaTranslation(
    page,
    "mama library ekata yanavaa                                            oyath enavadha yanna maath ekkala",
  );
  const expected = "මම library එකට යනවා ඔයත් එනවද යන්න මාත් එක්කල";
  checkResult(actual, expected, "Neg_Fun_0003", true);
  expect(actual).toBe(expected);
});

test("Neg_Fun_0004", async ({ page }) => {
  const actual = await getSinhalaTranslation(
    page,
    "class eka thiyenne 8.30 AM PM ta.",
  );
  const expected = "class එක තියෙන්නේ 8.30 AM ට.";
  checkResult(actual, expected, "Neg_Fun_0004", true);
  expect(actual).toBe(expected);
});

test("Neg_Fun_0005", async ({ page }) => {
  const actual = await getSinhalaTranslation(
    page,
    "link eka integrat karanna.",
  );
  const expected =
    "link එක integrate කරන්න.";
  checkResult(actual, expected, "Neg_Fun_0005", true);
  expect(actual).toBe(expected);
});

test("Neg_Fun_0006", async ({ page }) => {
  const actual = await getSinhalaTranslation(
    page,
    "oyaa laga thiyen mge emil acount eka ayn karanna puluvandha",
  );
  const expected =
    "ඔයා ලග තියෙන mage email account එක අයින් කරන්න පුලුවන්ද";
  checkResult(actual, expected, "Neg_Fun_0006", true);
  expect(actual).toBe(expected);
});

test("Neg_Fun_0007", async ({ page }) => {
  const actual = await getSinhalaTranslation(
    page,
    "project deadline eka 2025-05-20.",
  );
  const expected = "project deadline එක may 20.";
  checkResult(actual, expected, "Neg_Fun_0007", true);
  expect(actual).toBe(expected);
});

test("Neg_Fun_0008", async ({ page }) => {
  const actual = await getSinhalaTranslation(
    page,
    "tc machan",
  );
  const expected = "Take care මචන්";
  checkResult(actual, expected, "Neg_Fun_0008", true);
  expect(actual).toBe(expected);
});

test("Neg_Fun_0009", async ({ page }) => {
  const actual = await getSinhalaTranslation(
    page,
    "mata OTP eka SMS ekak vidihata avee nni",
  );
  const expected = "මට OTP එක sms එකක් විදිහට ආවෙ නෑනි";
  checkResult(actual, expected, "Neg_Fun_0009", true);
  expect(actual).toBe(expected);
});

test("Neg_Fun_0010", async ({ page }) => {
  const actual = await getSinhalaTranslation(
    page,
    "api mee pooyata paduvasnuvara yamudha",
  );
  const expected =
    "අපි මේ පෝයට paduvasnuvara යමුද";
  checkResult(actual, expected, "Neg_Fun_0010", true);
  expect(actual).toBe(expected);
});