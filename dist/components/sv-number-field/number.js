//#region src/components/sv-number-field/number.ts
function e(e) {
	let t = e.trim().replace(",", ".");
	if (!t) return null;
	if (!/^[+-]?(?:\d+(?:\.\d*)?|\.\d+)$/.test(t)) return;
	let n = Number(t);
	return Number.isFinite(n) ? n : void 0;
}
function t(e, t = -Infinity, n = Infinity) {
	return e === null ? null : Math.min(n, Math.max(t, e));
}
function n(e, t, n = 1, r = -Infinity, i = Infinity) {
	let a = (e ?? 0) + t * (Number.isFinite(n) && n > 0 ? n : 1);
	return Math.min(i, Math.max(r, Number(a.toPrecision(15))));
}
//#endregion
export { t as clampNumber, e as parseNumber, n as stepNumber };

//# sourceMappingURL=number.js.map