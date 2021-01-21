var __create = Object.create;
var __defProp = Object.defineProperty;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __markAsModule = (target) => __defProp(target, "__esModule", {value: true});
var __exportStar = (target, module2, desc) => {
  __markAsModule(target);
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && key !== "default")
        __defProp(target, key, {get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable});
  }
  return target;
};
var __toModule = (module2) => {
  if (module2 && module2.__esModule)
    return module2;
  return __exportStar(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", {value: module2, enumerable: true}), module2);
};

// src/bin.ts
var esbuild = __toModule(require("esbuild"));

// src/utils.ts
var mri = __toModule(require("mri"));
var getArguments = () => {
  const argv = process.argv.slice(2);
  const args = mri.default(argv, {
    alias: {
      i: "input",
      d: "dest"
    }
  });
  return args;
};

// src/bin.ts
var esbuild_svelte = __toModule(require("esbuild-svelte"));
var autoProcess = __toModule(require("svelte-preprocess/dist/autoProcess"));

// node_modules/.pnpm/svelte@3.31.0/node_modules/svelte/compiler.mjs
var now = typeof process !== "undefined" && process.hrtime ? () => {
  const t = process.hrtime();
  return t[0] * 1e3 + t[1] / 1e6;
} : () => self.performance.now();
var reservedWords = {
  3: "abstract boolean byte char class double enum export extends final float goto implements import int interface long native package private protected public short static super synchronized throws transient volatile",
  5: "class enum extends super const export import",
  6: "enum",
  strict: "implements interface let package private protected public static yield",
  strictBind: "eval arguments"
};
var ecma5AndLessKeywords = "break case catch continue debugger default do else finally for function if return switch throw try var while with null true false instanceof typeof void delete new in this";
var keywords = {
  5: ecma5AndLessKeywords,
  "5module": ecma5AndLessKeywords + " export import",
  6: ecma5AndLessKeywords + " const class extends export import super"
};
var keywordRelationalOperator = /^in(stanceof)?$/;
var nonASCIIidentifierStartChars = "\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u05D0-\u05EA\u05EF-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u08A0-\u08B4\u08B6-\u08C7\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D04-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1878\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1C90-\u1CBA\u1CBD-\u1CBF\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5\u1CF6\u1CFA\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2118-\u211D\u2124\u2126\u2128\u212A-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309B-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u31A0-\u31BF\u31F0-\u31FF\u3400-\u4DBF\u4E00-\u9FFC\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7BF\uA7C2-\uA7CA\uA7F5-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA8FE\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB69\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC";
var nonASCIIidentifierChars = "\u200C\u200D\xB7\u0300-\u036F\u0387\u0483-\u0487\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u0610-\u061A\u064B-\u0669\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED\u06F0-\u06F9\u0711\u0730-\u074A\u07A6-\u07B0\u07C0-\u07C9\u07EB-\u07F3\u07FD\u0816-\u0819\u081B-\u0823\u0825-\u0827\u0829-\u082D\u0859-\u085B\u08D3-\u08E1\u08E3-\u0903\u093A-\u093C\u093E-\u094F\u0951-\u0957\u0962\u0963\u0966-\u096F\u0981-\u0983\u09BC\u09BE-\u09C4\u09C7\u09C8\u09CB-\u09CD\u09D7\u09E2\u09E3\u09E6-\u09EF\u09FE\u0A01-\u0A03\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A66-\u0A71\u0A75\u0A81-\u0A83\u0ABC\u0ABE-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AE2\u0AE3\u0AE6-\u0AEF\u0AFA-\u0AFF\u0B01-\u0B03\u0B3C\u0B3E-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B55-\u0B57\u0B62\u0B63\u0B66-\u0B6F\u0B82\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD7\u0BE6-\u0BEF\u0C00-\u0C04\u0C3E-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C62\u0C63\u0C66-\u0C6F\u0C81-\u0C83\u0CBC\u0CBE-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CE2\u0CE3\u0CE6-\u0CEF\u0D00-\u0D03\u0D3B\u0D3C\u0D3E-\u0D44\u0D46-\u0D48\u0D4A-\u0D4D\u0D57\u0D62\u0D63\u0D66-\u0D6F\u0D81-\u0D83\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E31\u0E34-\u0E3A\u0E47-\u0E4E\u0E50-\u0E59\u0EB1\u0EB4-\u0EBC\u0EC8-\u0ECD\u0ED0-\u0ED9\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E\u0F3F\u0F71-\u0F84\u0F86\u0F87\u0F8D-\u0F97\u0F99-\u0FBC\u0FC6\u102B-\u103E\u1040-\u1049\u1056-\u1059\u105E-\u1060\u1062-\u1064\u1067-\u106D\u1071-\u1074\u1082-\u108D\u108F-\u109D\u135D-\u135F\u1369-\u1371\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17B4-\u17D3\u17DD\u17E0-\u17E9\u180B-\u180D\u1810-\u1819\u18A9\u1920-\u192B\u1930-\u193B\u1946-\u194F\u19D0-\u19DA\u1A17-\u1A1B\u1A55-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AB0-\u1ABD\u1ABF\u1AC0\u1B00-\u1B04\u1B34-\u1B44\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1B82\u1BA1-\u1BAD\u1BB0-\u1BB9\u1BE6-\u1BF3\u1C24-\u1C37\u1C40-\u1C49\u1C50-\u1C59\u1CD0-\u1CD2\u1CD4-\u1CE8\u1CED\u1CF4\u1CF7-\u1CF9\u1DC0-\u1DF9\u1DFB-\u1DFF\u203F\u2040\u2054\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2CEF-\u2CF1\u2D7F\u2DE0-\u2DFF\u302A-\u302F\u3099\u309A\uA620-\uA629\uA66F\uA674-\uA67D\uA69E\uA69F\uA6F0\uA6F1\uA802\uA806\uA80B\uA823-\uA827\uA82C\uA880\uA881\uA8B4-\uA8C5\uA8D0-\uA8D9\uA8E0-\uA8F1\uA8FF-\uA909\uA926-\uA92D\uA947-\uA953\uA980-\uA983\uA9B3-\uA9C0\uA9D0-\uA9D9\uA9E5\uA9F0-\uA9F9\uAA29-\uAA36\uAA43\uAA4C\uAA4D\uAA50-\uAA59\uAA7B-\uAA7D\uAAB0\uAAB2-\uAAB4\uAAB7\uAAB8\uAABE\uAABF\uAAC1\uAAEB-\uAAEF\uAAF5\uAAF6\uABE3-\uABEA\uABEC\uABED\uABF0-\uABF9\uFB1E\uFE00-\uFE0F\uFE20-\uFE2F\uFE33\uFE34\uFE4D-\uFE4F\uFF10-\uFF19\uFF3F";
var nonASCIIidentifierStart = new RegExp("[" + nonASCIIidentifierStartChars + "]");
var nonASCIIidentifier = new RegExp("[" + nonASCIIidentifierStartChars + nonASCIIidentifierChars + "]");
nonASCIIidentifierStartChars = nonASCIIidentifierChars = null;
var astralIdentifierStartCodes = [0, 11, 2, 25, 2, 18, 2, 1, 2, 14, 3, 13, 35, 122, 70, 52, 268, 28, 4, 48, 48, 31, 14, 29, 6, 37, 11, 29, 3, 35, 5, 7, 2, 4, 43, 157, 19, 35, 5, 35, 5, 39, 9, 51, 157, 310, 10, 21, 11, 7, 153, 5, 3, 0, 2, 43, 2, 1, 4, 0, 3, 22, 11, 22, 10, 30, 66, 18, 2, 1, 11, 21, 11, 25, 71, 55, 7, 1, 65, 0, 16, 3, 2, 2, 2, 28, 43, 28, 4, 28, 36, 7, 2, 27, 28, 53, 11, 21, 11, 18, 14, 17, 111, 72, 56, 50, 14, 50, 14, 35, 349, 41, 7, 1, 79, 28, 11, 0, 9, 21, 107, 20, 28, 22, 13, 52, 76, 44, 33, 24, 27, 35, 30, 0, 3, 0, 9, 34, 4, 0, 13, 47, 15, 3, 22, 0, 2, 0, 36, 17, 2, 24, 85, 6, 2, 0, 2, 3, 2, 14, 2, 9, 8, 46, 39, 7, 3, 1, 3, 21, 2, 6, 2, 1, 2, 4, 4, 0, 19, 0, 13, 4, 159, 52, 19, 3, 21, 2, 31, 47, 21, 1, 2, 0, 185, 46, 42, 3, 37, 47, 21, 0, 60, 42, 14, 0, 72, 26, 230, 43, 117, 63, 32, 7, 3, 0, 3, 7, 2, 1, 2, 23, 16, 0, 2, 0, 95, 7, 3, 38, 17, 0, 2, 0, 29, 0, 11, 39, 8, 0, 22, 0, 12, 45, 20, 0, 35, 56, 264, 8, 2, 36, 18, 0, 50, 29, 113, 6, 2, 1, 2, 37, 22, 0, 26, 5, 2, 1, 2, 31, 15, 0, 328, 18, 190, 0, 80, 921, 103, 110, 18, 195, 2749, 1070, 4050, 582, 8634, 568, 8, 30, 114, 29, 19, 47, 17, 3, 32, 20, 6, 18, 689, 63, 129, 74, 6, 0, 67, 12, 65, 1, 2, 0, 29, 6135, 9, 1237, 43, 8, 8952, 286, 50, 2, 18, 3, 9, 395, 2309, 106, 6, 12, 4, 8, 8, 9, 5991, 84, 2, 70, 2, 1, 3, 0, 3, 1, 3, 3, 2, 11, 2, 0, 2, 6, 2, 64, 2, 3, 3, 7, 2, 6, 2, 27, 2, 3, 2, 4, 2, 0, 4, 6, 2, 339, 3, 24, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2, 7, 2357, 44, 11, 6, 17, 0, 370, 43, 1301, 196, 60, 67, 8, 0, 1205, 3, 2, 26, 2, 1, 2, 0, 3, 0, 2, 9, 2, 3, 2, 0, 2, 0, 7, 0, 5, 0, 2, 0, 2, 0, 2, 2, 2, 1, 2, 0, 3, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 1, 2, 0, 3, 3, 2, 6, 2, 3, 2, 3, 2, 0, 2, 9, 2, 16, 6, 2, 2, 4, 2, 16, 4421, 42717, 35, 4148, 12, 221, 3, 5761, 15, 7472, 3104, 541, 1507, 4938];
var astralIdentifierCodes = [509, 0, 227, 0, 150, 4, 294, 9, 1368, 2, 2, 1, 6, 3, 41, 2, 5, 0, 166, 1, 574, 3, 9, 9, 370, 1, 154, 10, 176, 2, 54, 14, 32, 9, 16, 3, 46, 10, 54, 9, 7, 2, 37, 13, 2, 9, 6, 1, 45, 0, 13, 2, 49, 13, 9, 3, 2, 11, 83, 11, 7, 0, 161, 11, 6, 9, 7, 3, 56, 1, 2, 6, 3, 1, 3, 2, 10, 0, 11, 1, 3, 6, 4, 4, 193, 17, 10, 9, 5, 0, 82, 19, 13, 9, 214, 6, 3, 8, 28, 1, 83, 16, 16, 9, 82, 12, 9, 9, 84, 14, 5, 9, 243, 14, 166, 9, 71, 5, 2, 1, 3, 3, 2, 0, 2, 1, 13, 9, 120, 6, 3, 6, 4, 0, 29, 9, 41, 6, 2, 3, 9, 0, 10, 10, 47, 15, 406, 7, 2, 7, 17, 9, 57, 21, 2, 13, 123, 5, 4, 0, 2, 1, 2, 6, 2, 0, 9, 9, 49, 4, 2, 1, 2, 4, 9, 9, 330, 3, 19306, 9, 135, 4, 60, 6, 26, 9, 1014, 0, 2, 54, 8, 3, 82, 0, 12, 1, 19628, 1, 5319, 4, 4, 5, 9, 7, 3, 6, 31, 3, 149, 2, 1418, 49, 513, 54, 5, 49, 9, 0, 15, 0, 23, 4, 2, 14, 1361, 6, 2, 16, 3, 6, 2, 1, 2, 4, 262, 6, 10, 9, 419, 13, 1495, 6, 110, 6, 6, 9, 4759, 9, 787719, 239];
function isInAstralSet(code, set) {
  var pos = 65536;
  for (var i = 0; i < set.length; i += 2) {
    pos += set[i];
    if (pos > code) {
      return false;
    }
    pos += set[i + 1];
    if (pos >= code) {
      return true;
    }
  }
}
function isIdentifierStart(code, astral) {
  if (code < 65) {
    return code === 36;
  }
  if (code < 91) {
    return true;
  }
  if (code < 97) {
    return code === 95;
  }
  if (code < 123) {
    return true;
  }
  if (code <= 65535) {
    return code >= 170 && nonASCIIidentifierStart.test(String.fromCharCode(code));
  }
  if (astral === false) {
    return false;
  }
  return isInAstralSet(code, astralIdentifierStartCodes);
}
function isIdentifierChar(code, astral) {
  if (code < 48) {
    return code === 36;
  }
  if (code < 58) {
    return true;
  }
  if (code < 65) {
    return false;
  }
  if (code < 91) {
    return true;
  }
  if (code < 97) {
    return code === 95;
  }
  if (code < 123) {
    return true;
  }
  if (code <= 65535) {
    return code >= 170 && nonASCIIidentifier.test(String.fromCharCode(code));
  }
  if (astral === false) {
    return false;
  }
  return isInAstralSet(code, astralIdentifierStartCodes) || isInAstralSet(code, astralIdentifierCodes);
}
var TokenType = function TokenType2(label, conf) {
  if (conf === void 0)
    conf = {};
  this.label = label;
  this.keyword = conf.keyword;
  this.beforeExpr = !!conf.beforeExpr;
  this.startsExpr = !!conf.startsExpr;
  this.isLoop = !!conf.isLoop;
  this.isAssign = !!conf.isAssign;
  this.prefix = !!conf.prefix;
  this.postfix = !!conf.postfix;
  this.binop = conf.binop || null;
  this.updateContext = null;
};
function binop(name, prec) {
  return new TokenType(name, {beforeExpr: true, binop: prec});
}
var beforeExpr = {beforeExpr: true};
var startsExpr = {startsExpr: true};
var keywords$1 = {};
function kw(name, options) {
  if (options === void 0)
    options = {};
  options.keyword = name;
  return keywords$1[name] = new TokenType(name, options);
}
var types = {
  num: new TokenType("num", startsExpr),
  regexp: new TokenType("regexp", startsExpr),
  string: new TokenType("string", startsExpr),
  name: new TokenType("name", startsExpr),
  eof: new TokenType("eof"),
  bracketL: new TokenType("[", {beforeExpr: true, startsExpr: true}),
  bracketR: new TokenType("]"),
  braceL: new TokenType("{", {beforeExpr: true, startsExpr: true}),
  braceR: new TokenType("}"),
  parenL: new TokenType("(", {beforeExpr: true, startsExpr: true}),
  parenR: new TokenType(")"),
  comma: new TokenType(",", beforeExpr),
  semi: new TokenType(";", beforeExpr),
  colon: new TokenType(":", beforeExpr),
  dot: new TokenType("."),
  question: new TokenType("?", beforeExpr),
  questionDot: new TokenType("?."),
  arrow: new TokenType("=>", beforeExpr),
  template: new TokenType("template"),
  invalidTemplate: new TokenType("invalidTemplate"),
  ellipsis: new TokenType("...", beforeExpr),
  backQuote: new TokenType("`", startsExpr),
  dollarBraceL: new TokenType("${", {beforeExpr: true, startsExpr: true}),
  eq: new TokenType("=", {beforeExpr: true, isAssign: true}),
  assign: new TokenType("_=", {beforeExpr: true, isAssign: true}),
  incDec: new TokenType("++/--", {prefix: true, postfix: true, startsExpr: true}),
  prefix: new TokenType("!/~", {beforeExpr: true, prefix: true, startsExpr: true}),
  logicalOR: binop("||", 1),
  logicalAND: binop("&&", 2),
  bitwiseOR: binop("|", 3),
  bitwiseXOR: binop("^", 4),
  bitwiseAND: binop("&", 5),
  equality: binop("==/!=/===/!==", 6),
  relational: binop("</>/<=/>=", 7),
  bitShift: binop("<</>>/>>>", 8),
  plusMin: new TokenType("+/-", {beforeExpr: true, binop: 9, prefix: true, startsExpr: true}),
  modulo: binop("%", 10),
  star: binop("*", 10),
  slash: binop("/", 10),
  starstar: new TokenType("**", {beforeExpr: true}),
  coalesce: binop("??", 1),
  _break: kw("break"),
  _case: kw("case", beforeExpr),
  _catch: kw("catch"),
  _continue: kw("continue"),
  _debugger: kw("debugger"),
  _default: kw("default", beforeExpr),
  _do: kw("do", {isLoop: true, beforeExpr: true}),
  _else: kw("else", beforeExpr),
  _finally: kw("finally"),
  _for: kw("for", {isLoop: true}),
  _function: kw("function", startsExpr),
  _if: kw("if"),
  _return: kw("return", beforeExpr),
  _switch: kw("switch"),
  _throw: kw("throw", beforeExpr),
  _try: kw("try"),
  _var: kw("var"),
  _const: kw("const"),
  _while: kw("while", {isLoop: true}),
  _with: kw("with"),
  _new: kw("new", {beforeExpr: true, startsExpr: true}),
  _this: kw("this", startsExpr),
  _super: kw("super", startsExpr),
  _class: kw("class", startsExpr),
  _extends: kw("extends", beforeExpr),
  _export: kw("export"),
  _import: kw("import", startsExpr),
  _null: kw("null", startsExpr),
  _true: kw("true", startsExpr),
  _false: kw("false", startsExpr),
  _in: kw("in", {beforeExpr: true, binop: 7}),
  _instanceof: kw("instanceof", {beforeExpr: true, binop: 7}),
  _typeof: kw("typeof", {beforeExpr: true, prefix: true, startsExpr: true}),
  _void: kw("void", {beforeExpr: true, prefix: true, startsExpr: true}),
  _delete: kw("delete", {beforeExpr: true, prefix: true, startsExpr: true})
};
var lineBreak = /\r\n?|\n|\u2028|\u2029/;
var lineBreakG = new RegExp(lineBreak.source, "g");
function isNewLine(code, ecma2019String) {
  return code === 10 || code === 13 || !ecma2019String && (code === 8232 || code === 8233);
}
var nonASCIIwhitespace = /[\u1680\u2000-\u200a\u202f\u205f\u3000\ufeff]/;
var skipWhiteSpace = /(?:\s|\/\/.*|\/\*[^]*?\*\/)*/g;
var ref = Object.prototype;
var hasOwnProperty = ref.hasOwnProperty;
var toString = ref.toString;
function has(obj, propName) {
  return hasOwnProperty.call(obj, propName);
}
var isArray = Array.isArray || function(obj) {
  return toString.call(obj) === "[object Array]";
};
function wordsRegexp(words) {
  return new RegExp("^(?:" + words.replace(/ /g, "|") + ")$");
}
var Position = function Position2(line, col) {
  this.line = line;
  this.column = col;
};
Position.prototype.offset = function offset(n2) {
  return new Position(this.line, this.column + n2);
};
var SourceLocation = function SourceLocation2(p, start, end) {
  this.start = start;
  this.end = end;
  if (p.sourceFile !== null) {
    this.source = p.sourceFile;
  }
};
function getLineInfo(input, offset2) {
  for (var line = 1, cur = 0; ; ) {
    lineBreakG.lastIndex = cur;
    var match = lineBreakG.exec(input);
    if (match && match.index < offset2) {
      ++line;
      cur = match.index + match[0].length;
    } else {
      return new Position(line, offset2 - cur);
    }
  }
}
var defaultOptions = {
  ecmaVersion: 10,
  sourceType: "script",
  onInsertedSemicolon: null,
  onTrailingComma: null,
  allowReserved: null,
  allowReturnOutsideFunction: false,
  allowImportExportEverywhere: false,
  allowAwaitOutsideFunction: false,
  allowHashBang: false,
  locations: false,
  onToken: null,
  onComment: null,
  ranges: false,
  program: null,
  sourceFile: null,
  directSourceFile: null,
  preserveParens: false
};
function getOptions(opts) {
  var options = {};
  for (var opt in defaultOptions) {
    options[opt] = opts && has(opts, opt) ? opts[opt] : defaultOptions[opt];
  }
  if (options.ecmaVersion >= 2015) {
    options.ecmaVersion -= 2009;
  }
  if (options.allowReserved == null) {
    options.allowReserved = options.ecmaVersion < 5;
  }
  if (isArray(options.onToken)) {
    var tokens = options.onToken;
    options.onToken = function(token) {
      return tokens.push(token);
    };
  }
  if (isArray(options.onComment)) {
    options.onComment = pushComment(options, options.onComment);
  }
  return options;
}
function pushComment(options, array) {
  return function(block, text, start, end, startLoc, endLoc) {
    var comment = {
      type: block ? "Block" : "Line",
      value: text,
      start,
      end
    };
    if (options.locations) {
      comment.loc = new SourceLocation(this, startLoc, endLoc);
    }
    if (options.ranges) {
      comment.range = [start, end];
    }
    array.push(comment);
  };
}
var SCOPE_TOP = 1;
var SCOPE_FUNCTION = 2;
var SCOPE_VAR = SCOPE_TOP | SCOPE_FUNCTION;
var SCOPE_ASYNC = 4;
var SCOPE_GENERATOR = 8;
var SCOPE_ARROW = 16;
var SCOPE_SIMPLE_CATCH = 32;
var SCOPE_SUPER = 64;
var SCOPE_DIRECT_SUPER = 128;
function functionFlags(async, generator) {
  return SCOPE_FUNCTION | (async ? SCOPE_ASYNC : 0) | (generator ? SCOPE_GENERATOR : 0);
}
var BIND_NONE = 0;
var BIND_VAR = 1;
var BIND_LEXICAL = 2;
var BIND_FUNCTION = 3;
var BIND_SIMPLE_CATCH = 4;
var BIND_OUTSIDE = 5;
var Parser = function Parser2(options, input, startPos) {
  this.options = options = getOptions(options);
  this.sourceFile = options.sourceFile;
  this.keywords = wordsRegexp(keywords[options.ecmaVersion >= 6 ? 6 : options.sourceType === "module" ? "5module" : 5]);
  var reserved2 = "";
  if (options.allowReserved !== true) {
    for (var v = options.ecmaVersion; ; v--) {
      if (reserved2 = reservedWords[v]) {
        break;
      }
    }
    if (options.sourceType === "module") {
      reserved2 += " await";
    }
  }
  this.reservedWords = wordsRegexp(reserved2);
  var reservedStrict = (reserved2 ? reserved2 + " " : "") + reservedWords.strict;
  this.reservedWordsStrict = wordsRegexp(reservedStrict);
  this.reservedWordsStrictBind = wordsRegexp(reservedStrict + " " + reservedWords.strictBind);
  this.input = String(input);
  this.containsEsc = false;
  if (startPos) {
    this.pos = startPos;
    this.lineStart = this.input.lastIndexOf("\n", startPos - 1) + 1;
    this.curLine = this.input.slice(0, this.lineStart).split(lineBreak).length;
  } else {
    this.pos = this.lineStart = 0;
    this.curLine = 1;
  }
  this.type = types.eof;
  this.value = null;
  this.start = this.end = this.pos;
  this.startLoc = this.endLoc = this.curPosition();
  this.lastTokEndLoc = this.lastTokStartLoc = null;
  this.lastTokStart = this.lastTokEnd = this.pos;
  this.context = this.initialContext();
  this.exprAllowed = true;
  this.inModule = options.sourceType === "module";
  this.strict = this.inModule || this.strictDirective(this.pos);
  this.potentialArrowAt = -1;
  this.yieldPos = this.awaitPos = this.awaitIdentPos = 0;
  this.labels = [];
  this.undefinedExports = {};
  if (this.pos === 0 && options.allowHashBang && this.input.slice(0, 2) === "#!") {
    this.skipLineComment(2);
  }
  this.scopeStack = [];
  this.enterScope(SCOPE_TOP);
  this.regexpState = null;
};
var prototypeAccessors = {inFunction: {configurable: true}, inGenerator: {configurable: true}, inAsync: {configurable: true}, allowSuper: {configurable: true}, allowDirectSuper: {configurable: true}, treatFunctionsAsVar: {configurable: true}};
Parser.prototype.parse = function parse() {
  var node2 = this.options.program || this.startNode();
  this.nextToken();
  return this.parseTopLevel(node2);
};
prototypeAccessors.inFunction.get = function() {
  return (this.currentVarScope().flags & SCOPE_FUNCTION) > 0;
};
prototypeAccessors.inGenerator.get = function() {
  return (this.currentVarScope().flags & SCOPE_GENERATOR) > 0;
};
prototypeAccessors.inAsync.get = function() {
  return (this.currentVarScope().flags & SCOPE_ASYNC) > 0;
};
prototypeAccessors.allowSuper.get = function() {
  return (this.currentThisScope().flags & SCOPE_SUPER) > 0;
};
prototypeAccessors.allowDirectSuper.get = function() {
  return (this.currentThisScope().flags & SCOPE_DIRECT_SUPER) > 0;
};
prototypeAccessors.treatFunctionsAsVar.get = function() {
  return this.treatFunctionsAsVarInScope(this.currentScope());
};
Parser.prototype.inNonArrowFunction = function inNonArrowFunction() {
  return (this.currentThisScope().flags & SCOPE_FUNCTION) > 0;
};
Parser.extend = function extend() {
  var plugins = [], len = arguments.length;
  while (len--)
    plugins[len] = arguments[len];
  var cls = this;
  for (var i = 0; i < plugins.length; i++) {
    cls = plugins[i](cls);
  }
  return cls;
};
Parser.parse = function parse2(input, options) {
  return new this(options, input).parse();
};
Parser.parseExpressionAt = function parseExpressionAt(input, pos, options) {
  var parser2 = new this(options, input, pos);
  parser2.nextToken();
  return parser2.parseExpression();
};
Parser.tokenizer = function tokenizer(input, options) {
  return new this(options, input);
};
Object.defineProperties(Parser.prototype, prototypeAccessors);
var pp = Parser.prototype;
var literal = /^(?:'((?:\\.|[^'])*?)'|"((?:\\.|[^"])*?)")/;
pp.strictDirective = function(start) {
  for (; ; ) {
    skipWhiteSpace.lastIndex = start;
    start += skipWhiteSpace.exec(this.input)[0].length;
    var match = literal.exec(this.input.slice(start));
    if (!match) {
      return false;
    }
    if ((match[1] || match[2]) === "use strict") {
      skipWhiteSpace.lastIndex = start + match[0].length;
      var spaceAfter = skipWhiteSpace.exec(this.input), end = spaceAfter.index + spaceAfter[0].length;
      var next = this.input.charAt(end);
      return next === ";" || next === "}" || lineBreak.test(spaceAfter[0]) && !(/[(`.[+\-/*%<>=,?^&]/.test(next) || next === "!" && this.input.charAt(end + 1) === "=");
    }
    start += match[0].length;
    skipWhiteSpace.lastIndex = start;
    start += skipWhiteSpace.exec(this.input)[0].length;
    if (this.input[start] === ";") {
      start++;
    }
  }
};
pp.eat = function(type) {
  if (this.type === type) {
    this.next();
    return true;
  } else {
    return false;
  }
};
pp.isContextual = function(name) {
  return this.type === types.name && this.value === name && !this.containsEsc;
};
pp.eatContextual = function(name) {
  if (!this.isContextual(name)) {
    return false;
  }
  this.next();
  return true;
};
pp.expectContextual = function(name) {
  if (!this.eatContextual(name)) {
    this.unexpected();
  }
};
pp.canInsertSemicolon = function() {
  return this.type === types.eof || this.type === types.braceR || lineBreak.test(this.input.slice(this.lastTokEnd, this.start));
};
pp.insertSemicolon = function() {
  if (this.canInsertSemicolon()) {
    if (this.options.onInsertedSemicolon) {
      this.options.onInsertedSemicolon(this.lastTokEnd, this.lastTokEndLoc);
    }
    return true;
  }
};
pp.semicolon = function() {
  if (!this.eat(types.semi) && !this.insertSemicolon()) {
    this.unexpected();
  }
};
pp.afterTrailingComma = function(tokType, notNext) {
  if (this.type === tokType) {
    if (this.options.onTrailingComma) {
      this.options.onTrailingComma(this.lastTokStart, this.lastTokStartLoc);
    }
    if (!notNext) {
      this.next();
    }
    return true;
  }
};
pp.expect = function(type) {
  this.eat(type) || this.unexpected();
};
pp.unexpected = function(pos) {
  this.raise(pos != null ? pos : this.start, "Unexpected token");
};
function DestructuringErrors() {
  this.shorthandAssign = this.trailingComma = this.parenthesizedAssign = this.parenthesizedBind = this.doubleProto = -1;
}
pp.checkPatternErrors = function(refDestructuringErrors, isAssign) {
  if (!refDestructuringErrors) {
    return;
  }
  if (refDestructuringErrors.trailingComma > -1) {
    this.raiseRecoverable(refDestructuringErrors.trailingComma, "Comma is not permitted after the rest element");
  }
  var parens = isAssign ? refDestructuringErrors.parenthesizedAssign : refDestructuringErrors.parenthesizedBind;
  if (parens > -1) {
    this.raiseRecoverable(parens, "Parenthesized pattern");
  }
};
pp.checkExpressionErrors = function(refDestructuringErrors, andThrow) {
  if (!refDestructuringErrors) {
    return false;
  }
  var shorthandAssign = refDestructuringErrors.shorthandAssign;
  var doubleProto = refDestructuringErrors.doubleProto;
  if (!andThrow) {
    return shorthandAssign >= 0 || doubleProto >= 0;
  }
  if (shorthandAssign >= 0) {
    this.raise(shorthandAssign, "Shorthand property assignments are valid only in destructuring patterns");
  }
  if (doubleProto >= 0) {
    this.raiseRecoverable(doubleProto, "Redefinition of __proto__ property");
  }
};
pp.checkYieldAwaitInDefaultParams = function() {
  if (this.yieldPos && (!this.awaitPos || this.yieldPos < this.awaitPos)) {
    this.raise(this.yieldPos, "Yield expression cannot be a default value");
  }
  if (this.awaitPos) {
    this.raise(this.awaitPos, "Await expression cannot be a default value");
  }
};
pp.isSimpleAssignTarget = function(expr) {
  if (expr.type === "ParenthesizedExpression") {
    return this.isSimpleAssignTarget(expr.expression);
  }
  return expr.type === "Identifier" || expr.type === "MemberExpression";
};
var pp$1 = Parser.prototype;
pp$1.parseTopLevel = function(node2) {
  var exports2 = {};
  if (!node2.body) {
    node2.body = [];
  }
  while (this.type !== types.eof) {
    var stmt = this.parseStatement(null, true, exports2);
    node2.body.push(stmt);
  }
  if (this.inModule) {
    for (var i = 0, list2 = Object.keys(this.undefinedExports); i < list2.length; i += 1) {
      var name = list2[i];
      this.raiseRecoverable(this.undefinedExports[name].start, "Export '" + name + "' is not defined");
    }
  }
  this.adaptDirectivePrologue(node2.body);
  this.next();
  node2.sourceType = this.options.sourceType;
  return this.finishNode(node2, "Program");
};
var loopLabel = {kind: "loop"};
var switchLabel = {kind: "switch"};
pp$1.isLet = function(context2) {
  if (this.options.ecmaVersion < 6 || !this.isContextual("let")) {
    return false;
  }
  skipWhiteSpace.lastIndex = this.pos;
  var skip = skipWhiteSpace.exec(this.input);
  var next = this.pos + skip[0].length, nextCh = this.input.charCodeAt(next);
  if (nextCh === 91) {
    return true;
  }
  if (context2) {
    return false;
  }
  if (nextCh === 123) {
    return true;
  }
  if (isIdentifierStart(nextCh, true)) {
    var pos = next + 1;
    while (isIdentifierChar(this.input.charCodeAt(pos), true)) {
      ++pos;
    }
    var ident = this.input.slice(next, pos);
    if (!keywordRelationalOperator.test(ident)) {
      return true;
    }
  }
  return false;
};
pp$1.isAsyncFunction = function() {
  if (this.options.ecmaVersion < 8 || !this.isContextual("async")) {
    return false;
  }
  skipWhiteSpace.lastIndex = this.pos;
  var skip = skipWhiteSpace.exec(this.input);
  var next = this.pos + skip[0].length;
  return !lineBreak.test(this.input.slice(this.pos, next)) && this.input.slice(next, next + 8) === "function" && (next + 8 === this.input.length || !isIdentifierChar(this.input.charAt(next + 8)));
};
pp$1.parseStatement = function(context2, topLevel, exports2) {
  var starttype = this.type, node2 = this.startNode(), kind;
  if (this.isLet(context2)) {
    starttype = types._var;
    kind = "let";
  }
  switch (starttype) {
    case types._break:
    case types._continue:
      return this.parseBreakContinueStatement(node2, starttype.keyword);
    case types._debugger:
      return this.parseDebuggerStatement(node2);
    case types._do:
      return this.parseDoStatement(node2);
    case types._for:
      return this.parseForStatement(node2);
    case types._function:
      if (context2 && (this.strict || context2 !== "if" && context2 !== "label") && this.options.ecmaVersion >= 6) {
        this.unexpected();
      }
      return this.parseFunctionStatement(node2, false, !context2);
    case types._class:
      if (context2) {
        this.unexpected();
      }
      return this.parseClass(node2, true);
    case types._if:
      return this.parseIfStatement(node2);
    case types._return:
      return this.parseReturnStatement(node2);
    case types._switch:
      return this.parseSwitchStatement(node2);
    case types._throw:
      return this.parseThrowStatement(node2);
    case types._try:
      return this.parseTryStatement(node2);
    case types._const:
    case types._var:
      kind = kind || this.value;
      if (context2 && kind !== "var") {
        this.unexpected();
      }
      return this.parseVarStatement(node2, kind);
    case types._while:
      return this.parseWhileStatement(node2);
    case types._with:
      return this.parseWithStatement(node2);
    case types.braceL:
      return this.parseBlock(true, node2);
    case types.semi:
      return this.parseEmptyStatement(node2);
    case types._export:
    case types._import:
      if (this.options.ecmaVersion > 10 && starttype === types._import) {
        skipWhiteSpace.lastIndex = this.pos;
        var skip = skipWhiteSpace.exec(this.input);
        var next = this.pos + skip[0].length, nextCh = this.input.charCodeAt(next);
        if (nextCh === 40 || nextCh === 46) {
          return this.parseExpressionStatement(node2, this.parseExpression());
        }
      }
      if (!this.options.allowImportExportEverywhere) {
        if (!topLevel) {
          this.raise(this.start, "'import' and 'export' may only appear at the top level");
        }
        if (!this.inModule) {
          this.raise(this.start, "'import' and 'export' may appear only with 'sourceType: module'");
        }
      }
      return starttype === types._import ? this.parseImport(node2) : this.parseExport(node2, exports2);
    default:
      if (this.isAsyncFunction()) {
        if (context2) {
          this.unexpected();
        }
        this.next();
        return this.parseFunctionStatement(node2, true, !context2);
      }
      var maybeName = this.value, expr = this.parseExpression();
      if (starttype === types.name && expr.type === "Identifier" && this.eat(types.colon)) {
        return this.parseLabeledStatement(node2, maybeName, expr, context2);
      } else {
        return this.parseExpressionStatement(node2, expr);
      }
  }
};
pp$1.parseBreakContinueStatement = function(node2, keyword) {
  var isBreak = keyword === "break";
  this.next();
  if (this.eat(types.semi) || this.insertSemicolon()) {
    node2.label = null;
  } else if (this.type !== types.name) {
    this.unexpected();
  } else {
    node2.label = this.parseIdent();
    this.semicolon();
  }
  var i = 0;
  for (; i < this.labels.length; ++i) {
    var lab = this.labels[i];
    if (node2.label == null || lab.name === node2.label.name) {
      if (lab.kind != null && (isBreak || lab.kind === "loop")) {
        break;
      }
      if (node2.label && isBreak) {
        break;
      }
    }
  }
  if (i === this.labels.length) {
    this.raise(node2.start, "Unsyntactic " + keyword);
  }
  return this.finishNode(node2, isBreak ? "BreakStatement" : "ContinueStatement");
};
pp$1.parseDebuggerStatement = function(node2) {
  this.next();
  this.semicolon();
  return this.finishNode(node2, "DebuggerStatement");
};
pp$1.parseDoStatement = function(node2) {
  this.next();
  this.labels.push(loopLabel);
  node2.body = this.parseStatement("do");
  this.labels.pop();
  this.expect(types._while);
  node2.test = this.parseParenExpression();
  if (this.options.ecmaVersion >= 6) {
    this.eat(types.semi);
  } else {
    this.semicolon();
  }
  return this.finishNode(node2, "DoWhileStatement");
};
pp$1.parseForStatement = function(node2) {
  this.next();
  var awaitAt = this.options.ecmaVersion >= 9 && (this.inAsync || !this.inFunction && this.options.allowAwaitOutsideFunction) && this.eatContextual("await") ? this.lastTokStart : -1;
  this.labels.push(loopLabel);
  this.enterScope(0);
  this.expect(types.parenL);
  if (this.type === types.semi) {
    if (awaitAt > -1) {
      this.unexpected(awaitAt);
    }
    return this.parseFor(node2, null);
  }
  var isLet = this.isLet();
  if (this.type === types._var || this.type === types._const || isLet) {
    var init$1 = this.startNode(), kind = isLet ? "let" : this.value;
    this.next();
    this.parseVar(init$1, true, kind);
    this.finishNode(init$1, "VariableDeclaration");
    if ((this.type === types._in || this.options.ecmaVersion >= 6 && this.isContextual("of")) && init$1.declarations.length === 1) {
      if (this.options.ecmaVersion >= 9) {
        if (this.type === types._in) {
          if (awaitAt > -1) {
            this.unexpected(awaitAt);
          }
        } else {
          node2.await = awaitAt > -1;
        }
      }
      return this.parseForIn(node2, init$1);
    }
    if (awaitAt > -1) {
      this.unexpected(awaitAt);
    }
    return this.parseFor(node2, init$1);
  }
  var refDestructuringErrors = new DestructuringErrors();
  var init = this.parseExpression(true, refDestructuringErrors);
  if (this.type === types._in || this.options.ecmaVersion >= 6 && this.isContextual("of")) {
    if (this.options.ecmaVersion >= 9) {
      if (this.type === types._in) {
        if (awaitAt > -1) {
          this.unexpected(awaitAt);
        }
      } else {
        node2.await = awaitAt > -1;
      }
    }
    this.toAssignable(init, false, refDestructuringErrors);
    this.checkLVal(init);
    return this.parseForIn(node2, init);
  } else {
    this.checkExpressionErrors(refDestructuringErrors, true);
  }
  if (awaitAt > -1) {
    this.unexpected(awaitAt);
  }
  return this.parseFor(node2, init);
};
pp$1.parseFunctionStatement = function(node2, isAsync, declarationPosition) {
  this.next();
  return this.parseFunction(node2, FUNC_STATEMENT | (declarationPosition ? 0 : FUNC_HANGING_STATEMENT), false, isAsync);
};
pp$1.parseIfStatement = function(node2) {
  this.next();
  node2.test = this.parseParenExpression();
  node2.consequent = this.parseStatement("if");
  node2.alternate = this.eat(types._else) ? this.parseStatement("if") : null;
  return this.finishNode(node2, "IfStatement");
};
pp$1.parseReturnStatement = function(node2) {
  if (!this.inFunction && !this.options.allowReturnOutsideFunction) {
    this.raise(this.start, "'return' outside of function");
  }
  this.next();
  if (this.eat(types.semi) || this.insertSemicolon()) {
    node2.argument = null;
  } else {
    node2.argument = this.parseExpression();
    this.semicolon();
  }
  return this.finishNode(node2, "ReturnStatement");
};
pp$1.parseSwitchStatement = function(node2) {
  this.next();
  node2.discriminant = this.parseParenExpression();
  node2.cases = [];
  this.expect(types.braceL);
  this.labels.push(switchLabel);
  this.enterScope(0);
  var cur;
  for (var sawDefault = false; this.type !== types.braceR; ) {
    if (this.type === types._case || this.type === types._default) {
      var isCase = this.type === types._case;
      if (cur) {
        this.finishNode(cur, "SwitchCase");
      }
      node2.cases.push(cur = this.startNode());
      cur.consequent = [];
      this.next();
      if (isCase) {
        cur.test = this.parseExpression();
      } else {
        if (sawDefault) {
          this.raiseRecoverable(this.lastTokStart, "Multiple default clauses");
        }
        sawDefault = true;
        cur.test = null;
      }
      this.expect(types.colon);
    } else {
      if (!cur) {
        this.unexpected();
      }
      cur.consequent.push(this.parseStatement(null));
    }
  }
  this.exitScope();
  if (cur) {
    this.finishNode(cur, "SwitchCase");
  }
  this.next();
  this.labels.pop();
  return this.finishNode(node2, "SwitchStatement");
};
pp$1.parseThrowStatement = function(node2) {
  this.next();
  if (lineBreak.test(this.input.slice(this.lastTokEnd, this.start))) {
    this.raise(this.lastTokEnd, "Illegal newline after throw");
  }
  node2.argument = this.parseExpression();
  this.semicolon();
  return this.finishNode(node2, "ThrowStatement");
};
var empty = [];
pp$1.parseTryStatement = function(node2) {
  this.next();
  node2.block = this.parseBlock();
  node2.handler = null;
  if (this.type === types._catch) {
    var clause = this.startNode();
    this.next();
    if (this.eat(types.parenL)) {
      clause.param = this.parseBindingAtom();
      var simple = clause.param.type === "Identifier";
      this.enterScope(simple ? SCOPE_SIMPLE_CATCH : 0);
      this.checkLVal(clause.param, simple ? BIND_SIMPLE_CATCH : BIND_LEXICAL);
      this.expect(types.parenR);
    } else {
      if (this.options.ecmaVersion < 10) {
        this.unexpected();
      }
      clause.param = null;
      this.enterScope(0);
    }
    clause.body = this.parseBlock(false);
    this.exitScope();
    node2.handler = this.finishNode(clause, "CatchClause");
  }
  node2.finalizer = this.eat(types._finally) ? this.parseBlock() : null;
  if (!node2.handler && !node2.finalizer) {
    this.raise(node2.start, "Missing catch or finally clause");
  }
  return this.finishNode(node2, "TryStatement");
};
pp$1.parseVarStatement = function(node2, kind) {
  this.next();
  this.parseVar(node2, false, kind);
  this.semicolon();
  return this.finishNode(node2, "VariableDeclaration");
};
pp$1.parseWhileStatement = function(node2) {
  this.next();
  node2.test = this.parseParenExpression();
  this.labels.push(loopLabel);
  node2.body = this.parseStatement("while");
  this.labels.pop();
  return this.finishNode(node2, "WhileStatement");
};
pp$1.parseWithStatement = function(node2) {
  if (this.strict) {
    this.raise(this.start, "'with' in strict mode");
  }
  this.next();
  node2.object = this.parseParenExpression();
  node2.body = this.parseStatement("with");
  return this.finishNode(node2, "WithStatement");
};
pp$1.parseEmptyStatement = function(node2) {
  this.next();
  return this.finishNode(node2, "EmptyStatement");
};
pp$1.parseLabeledStatement = function(node2, maybeName, expr, context2) {
  for (var i$1 = 0, list2 = this.labels; i$1 < list2.length; i$1 += 1) {
    var label = list2[i$1];
    if (label.name === maybeName) {
      this.raise(expr.start, "Label '" + maybeName + "' is already declared");
    }
  }
  var kind = this.type.isLoop ? "loop" : this.type === types._switch ? "switch" : null;
  for (var i = this.labels.length - 1; i >= 0; i--) {
    var label$1 = this.labels[i];
    if (label$1.statementStart === node2.start) {
      label$1.statementStart = this.start;
      label$1.kind = kind;
    } else {
      break;
    }
  }
  this.labels.push({name: maybeName, kind, statementStart: this.start});
  node2.body = this.parseStatement(context2 ? context2.indexOf("label") === -1 ? context2 + "label" : context2 : "label");
  this.labels.pop();
  node2.label = expr;
  return this.finishNode(node2, "LabeledStatement");
};
pp$1.parseExpressionStatement = function(node2, expr) {
  node2.expression = expr;
  this.semicolon();
  return this.finishNode(node2, "ExpressionStatement");
};
pp$1.parseBlock = function(createNewLexicalScope, node2, exitStrict) {
  if (createNewLexicalScope === void 0)
    createNewLexicalScope = true;
  if (node2 === void 0)
    node2 = this.startNode();
  node2.body = [];
  this.expect(types.braceL);
  if (createNewLexicalScope) {
    this.enterScope(0);
  }
  while (this.type !== types.braceR) {
    var stmt = this.parseStatement(null);
    node2.body.push(stmt);
  }
  if (exitStrict) {
    this.strict = false;
  }
  this.next();
  if (createNewLexicalScope) {
    this.exitScope();
  }
  return this.finishNode(node2, "BlockStatement");
};
pp$1.parseFor = function(node2, init) {
  node2.init = init;
  this.expect(types.semi);
  node2.test = this.type === types.semi ? null : this.parseExpression();
  this.expect(types.semi);
  node2.update = this.type === types.parenR ? null : this.parseExpression();
  this.expect(types.parenR);
  node2.body = this.parseStatement("for");
  this.exitScope();
  this.labels.pop();
  return this.finishNode(node2, "ForStatement");
};
pp$1.parseForIn = function(node2, init) {
  var isForIn = this.type === types._in;
  this.next();
  if (init.type === "VariableDeclaration" && init.declarations[0].init != null && (!isForIn || this.options.ecmaVersion < 8 || this.strict || init.kind !== "var" || init.declarations[0].id.type !== "Identifier")) {
    this.raise(init.start, (isForIn ? "for-in" : "for-of") + " loop variable declaration may not have an initializer");
  } else if (init.type === "AssignmentPattern") {
    this.raise(init.start, "Invalid left-hand side in for-loop");
  }
  node2.left = init;
  node2.right = isForIn ? this.parseExpression() : this.parseMaybeAssign();
  this.expect(types.parenR);
  node2.body = this.parseStatement("for");
  this.exitScope();
  this.labels.pop();
  return this.finishNode(node2, isForIn ? "ForInStatement" : "ForOfStatement");
};
pp$1.parseVar = function(node2, isFor, kind) {
  node2.declarations = [];
  node2.kind = kind;
  for (; ; ) {
    var decl = this.startNode();
    this.parseVarId(decl, kind);
    if (this.eat(types.eq)) {
      decl.init = this.parseMaybeAssign(isFor);
    } else if (kind === "const" && !(this.type === types._in || this.options.ecmaVersion >= 6 && this.isContextual("of"))) {
      this.unexpected();
    } else if (decl.id.type !== "Identifier" && !(isFor && (this.type === types._in || this.isContextual("of")))) {
      this.raise(this.lastTokEnd, "Complex binding patterns require an initialization value");
    } else {
      decl.init = null;
    }
    node2.declarations.push(this.finishNode(decl, "VariableDeclarator"));
    if (!this.eat(types.comma)) {
      break;
    }
  }
  return node2;
};
pp$1.parseVarId = function(decl, kind) {
  decl.id = this.parseBindingAtom();
  this.checkLVal(decl.id, kind === "var" ? BIND_VAR : BIND_LEXICAL, false);
};
var FUNC_STATEMENT = 1;
var FUNC_HANGING_STATEMENT = 2;
var FUNC_NULLABLE_ID = 4;
pp$1.parseFunction = function(node2, statement, allowExpressionBody, isAsync) {
  this.initFunction(node2);
  if (this.options.ecmaVersion >= 9 || this.options.ecmaVersion >= 6 && !isAsync) {
    if (this.type === types.star && statement & FUNC_HANGING_STATEMENT) {
      this.unexpected();
    }
    node2.generator = this.eat(types.star);
  }
  if (this.options.ecmaVersion >= 8) {
    node2.async = !!isAsync;
  }
  if (statement & FUNC_STATEMENT) {
    node2.id = statement & FUNC_NULLABLE_ID && this.type !== types.name ? null : this.parseIdent();
    if (node2.id && !(statement & FUNC_HANGING_STATEMENT)) {
      this.checkLVal(node2.id, this.strict || node2.generator || node2.async ? this.treatFunctionsAsVar ? BIND_VAR : BIND_LEXICAL : BIND_FUNCTION);
    }
  }
  var oldYieldPos = this.yieldPos, oldAwaitPos = this.awaitPos, oldAwaitIdentPos = this.awaitIdentPos;
  this.yieldPos = 0;
  this.awaitPos = 0;
  this.awaitIdentPos = 0;
  this.enterScope(functionFlags(node2.async, node2.generator));
  if (!(statement & FUNC_STATEMENT)) {
    node2.id = this.type === types.name ? this.parseIdent() : null;
  }
  this.parseFunctionParams(node2);
  this.parseFunctionBody(node2, allowExpressionBody, false);
  this.yieldPos = oldYieldPos;
  this.awaitPos = oldAwaitPos;
  this.awaitIdentPos = oldAwaitIdentPos;
  return this.finishNode(node2, statement & FUNC_STATEMENT ? "FunctionDeclaration" : "FunctionExpression");
};
pp$1.parseFunctionParams = function(node2) {
  this.expect(types.parenL);
  node2.params = this.parseBindingList(types.parenR, false, this.options.ecmaVersion >= 8);
  this.checkYieldAwaitInDefaultParams();
};
pp$1.parseClass = function(node2, isStatement) {
  this.next();
  var oldStrict = this.strict;
  this.strict = true;
  this.parseClassId(node2, isStatement);
  this.parseClassSuper(node2);
  var classBody = this.startNode();
  var hadConstructor = false;
  classBody.body = [];
  this.expect(types.braceL);
  while (this.type !== types.braceR) {
    var element2 = this.parseClassElement(node2.superClass !== null);
    if (element2) {
      classBody.body.push(element2);
      if (element2.type === "MethodDefinition" && element2.kind === "constructor") {
        if (hadConstructor) {
          this.raise(element2.start, "Duplicate constructor in the same class");
        }
        hadConstructor = true;
      }
    }
  }
  this.strict = oldStrict;
  this.next();
  node2.body = this.finishNode(classBody, "ClassBody");
  return this.finishNode(node2, isStatement ? "ClassDeclaration" : "ClassExpression");
};
pp$1.parseClassElement = function(constructorAllowsSuper) {
  var this$1 = this;
  if (this.eat(types.semi)) {
    return null;
  }
  var method = this.startNode();
  var tryContextual = function(k, noLineBreak) {
    if (noLineBreak === void 0)
      noLineBreak = false;
    var start = this$1.start, startLoc = this$1.startLoc;
    if (!this$1.eatContextual(k)) {
      return false;
    }
    if (this$1.type !== types.parenL && (!noLineBreak || !this$1.canInsertSemicolon())) {
      return true;
    }
    if (method.key) {
      this$1.unexpected();
    }
    method.computed = false;
    method.key = this$1.startNodeAt(start, startLoc);
    method.key.name = k;
    this$1.finishNode(method.key, "Identifier");
    return false;
  };
  method.kind = "method";
  method.static = tryContextual("static");
  var isGenerator = this.eat(types.star);
  var isAsync = false;
  if (!isGenerator) {
    if (this.options.ecmaVersion >= 8 && tryContextual("async", true)) {
      isAsync = true;
      isGenerator = this.options.ecmaVersion >= 9 && this.eat(types.star);
    } else if (tryContextual("get")) {
      method.kind = "get";
    } else if (tryContextual("set")) {
      method.kind = "set";
    }
  }
  if (!method.key) {
    this.parsePropertyName(method);
  }
  var key = method.key;
  var allowsDirectSuper = false;
  if (!method.computed && !method.static && (key.type === "Identifier" && key.name === "constructor" || key.type === "Literal" && key.value === "constructor")) {
    if (method.kind !== "method") {
      this.raise(key.start, "Constructor can't have get/set modifier");
    }
    if (isGenerator) {
      this.raise(key.start, "Constructor can't be a generator");
    }
    if (isAsync) {
      this.raise(key.start, "Constructor can't be an async method");
    }
    method.kind = "constructor";
    allowsDirectSuper = constructorAllowsSuper;
  } else if (method.static && key.type === "Identifier" && key.name === "prototype") {
    this.raise(key.start, "Classes may not have a static property named prototype");
  }
  this.parseClassMethod(method, isGenerator, isAsync, allowsDirectSuper);
  if (method.kind === "get" && method.value.params.length !== 0) {
    this.raiseRecoverable(method.value.start, "getter should have no params");
  }
  if (method.kind === "set" && method.value.params.length !== 1) {
    this.raiseRecoverable(method.value.start, "setter should have exactly one param");
  }
  if (method.kind === "set" && method.value.params[0].type === "RestElement") {
    this.raiseRecoverable(method.value.params[0].start, "Setter cannot use rest params");
  }
  return method;
};
pp$1.parseClassMethod = function(method, isGenerator, isAsync, allowsDirectSuper) {
  method.value = this.parseMethod(isGenerator, isAsync, allowsDirectSuper);
  return this.finishNode(method, "MethodDefinition");
};
pp$1.parseClassId = function(node2, isStatement) {
  if (this.type === types.name) {
    node2.id = this.parseIdent();
    if (isStatement) {
      this.checkLVal(node2.id, BIND_LEXICAL, false);
    }
  } else {
    if (isStatement === true) {
      this.unexpected();
    }
    node2.id = null;
  }
};
pp$1.parseClassSuper = function(node2) {
  node2.superClass = this.eat(types._extends) ? this.parseExprSubscripts() : null;
};
pp$1.parseExport = function(node2, exports2) {
  this.next();
  if (this.eat(types.star)) {
    if (this.options.ecmaVersion >= 11) {
      if (this.eatContextual("as")) {
        node2.exported = this.parseIdent(true);
        this.checkExport(exports2, node2.exported.name, this.lastTokStart);
      } else {
        node2.exported = null;
      }
    }
    this.expectContextual("from");
    if (this.type !== types.string) {
      this.unexpected();
    }
    node2.source = this.parseExprAtom();
    this.semicolon();
    return this.finishNode(node2, "ExportAllDeclaration");
  }
  if (this.eat(types._default)) {
    this.checkExport(exports2, "default", this.lastTokStart);
    var isAsync;
    if (this.type === types._function || (isAsync = this.isAsyncFunction())) {
      var fNode = this.startNode();
      this.next();
      if (isAsync) {
        this.next();
      }
      node2.declaration = this.parseFunction(fNode, FUNC_STATEMENT | FUNC_NULLABLE_ID, false, isAsync);
    } else if (this.type === types._class) {
      var cNode = this.startNode();
      node2.declaration = this.parseClass(cNode, "nullableID");
    } else {
      node2.declaration = this.parseMaybeAssign();
      this.semicolon();
    }
    return this.finishNode(node2, "ExportDefaultDeclaration");
  }
  if (this.shouldParseExportStatement()) {
    node2.declaration = this.parseStatement(null);
    if (node2.declaration.type === "VariableDeclaration") {
      this.checkVariableExport(exports2, node2.declaration.declarations);
    } else {
      this.checkExport(exports2, node2.declaration.id.name, node2.declaration.id.start);
    }
    node2.specifiers = [];
    node2.source = null;
  } else {
    node2.declaration = null;
    node2.specifiers = this.parseExportSpecifiers(exports2);
    if (this.eatContextual("from")) {
      if (this.type !== types.string) {
        this.unexpected();
      }
      node2.source = this.parseExprAtom();
    } else {
      for (var i = 0, list2 = node2.specifiers; i < list2.length; i += 1) {
        var spec = list2[i];
        this.checkUnreserved(spec.local);
        this.checkLocalExport(spec.local);
      }
      node2.source = null;
    }
    this.semicolon();
  }
  return this.finishNode(node2, "ExportNamedDeclaration");
};
pp$1.checkExport = function(exports2, name, pos) {
  if (!exports2) {
    return;
  }
  if (has(exports2, name)) {
    this.raiseRecoverable(pos, "Duplicate export '" + name + "'");
  }
  exports2[name] = true;
};
pp$1.checkPatternExport = function(exports2, pat) {
  var type = pat.type;
  if (type === "Identifier") {
    this.checkExport(exports2, pat.name, pat.start);
  } else if (type === "ObjectPattern") {
    for (var i = 0, list2 = pat.properties; i < list2.length; i += 1) {
      var prop = list2[i];
      this.checkPatternExport(exports2, prop);
    }
  } else if (type === "ArrayPattern") {
    for (var i$1 = 0, list$1 = pat.elements; i$1 < list$1.length; i$1 += 1) {
      var elt = list$1[i$1];
      if (elt) {
        this.checkPatternExport(exports2, elt);
      }
    }
  } else if (type === "Property") {
    this.checkPatternExport(exports2, pat.value);
  } else if (type === "AssignmentPattern") {
    this.checkPatternExport(exports2, pat.left);
  } else if (type === "RestElement") {
    this.checkPatternExport(exports2, pat.argument);
  } else if (type === "ParenthesizedExpression") {
    this.checkPatternExport(exports2, pat.expression);
  }
};
pp$1.checkVariableExport = function(exports2, decls) {
  if (!exports2) {
    return;
  }
  for (var i = 0, list2 = decls; i < list2.length; i += 1) {
    var decl = list2[i];
    this.checkPatternExport(exports2, decl.id);
  }
};
pp$1.shouldParseExportStatement = function() {
  return this.type.keyword === "var" || this.type.keyword === "const" || this.type.keyword === "class" || this.type.keyword === "function" || this.isLet() || this.isAsyncFunction();
};
pp$1.parseExportSpecifiers = function(exports2) {
  var nodes = [], first = true;
  this.expect(types.braceL);
  while (!this.eat(types.braceR)) {
    if (!first) {
      this.expect(types.comma);
      if (this.afterTrailingComma(types.braceR)) {
        break;
      }
    } else {
      first = false;
    }
    var node2 = this.startNode();
    node2.local = this.parseIdent(true);
    node2.exported = this.eatContextual("as") ? this.parseIdent(true) : node2.local;
    this.checkExport(exports2, node2.exported.name, node2.exported.start);
    nodes.push(this.finishNode(node2, "ExportSpecifier"));
  }
  return nodes;
};
pp$1.parseImport = function(node2) {
  this.next();
  if (this.type === types.string) {
    node2.specifiers = empty;
    node2.source = this.parseExprAtom();
  } else {
    node2.specifiers = this.parseImportSpecifiers();
    this.expectContextual("from");
    node2.source = this.type === types.string ? this.parseExprAtom() : this.unexpected();
  }
  this.semicolon();
  return this.finishNode(node2, "ImportDeclaration");
};
pp$1.parseImportSpecifiers = function() {
  var nodes = [], first = true;
  if (this.type === types.name) {
    var node2 = this.startNode();
    node2.local = this.parseIdent();
    this.checkLVal(node2.local, BIND_LEXICAL);
    nodes.push(this.finishNode(node2, "ImportDefaultSpecifier"));
    if (!this.eat(types.comma)) {
      return nodes;
    }
  }
  if (this.type === types.star) {
    var node$1 = this.startNode();
    this.next();
    this.expectContextual("as");
    node$1.local = this.parseIdent();
    this.checkLVal(node$1.local, BIND_LEXICAL);
    nodes.push(this.finishNode(node$1, "ImportNamespaceSpecifier"));
    return nodes;
  }
  this.expect(types.braceL);
  while (!this.eat(types.braceR)) {
    if (!first) {
      this.expect(types.comma);
      if (this.afterTrailingComma(types.braceR)) {
        break;
      }
    } else {
      first = false;
    }
    var node$2 = this.startNode();
    node$2.imported = this.parseIdent(true);
    if (this.eatContextual("as")) {
      node$2.local = this.parseIdent();
    } else {
      this.checkUnreserved(node$2.imported);
      node$2.local = node$2.imported;
    }
    this.checkLVal(node$2.local, BIND_LEXICAL);
    nodes.push(this.finishNode(node$2, "ImportSpecifier"));
  }
  return nodes;
};
pp$1.adaptDirectivePrologue = function(statements) {
  for (var i = 0; i < statements.length && this.isDirectiveCandidate(statements[i]); ++i) {
    statements[i].directive = statements[i].expression.raw.slice(1, -1);
  }
};
pp$1.isDirectiveCandidate = function(statement) {
  return statement.type === "ExpressionStatement" && statement.expression.type === "Literal" && typeof statement.expression.value === "string" && (this.input[statement.start] === '"' || this.input[statement.start] === "'");
};
var pp$2 = Parser.prototype;
pp$2.toAssignable = function(node2, isBinding, refDestructuringErrors) {
  if (this.options.ecmaVersion >= 6 && node2) {
    switch (node2.type) {
      case "Identifier":
        if (this.inAsync && node2.name === "await") {
          this.raise(node2.start, "Cannot use 'await' as identifier inside an async function");
        }
        break;
      case "ObjectPattern":
      case "ArrayPattern":
      case "RestElement":
        break;
      case "ObjectExpression":
        node2.type = "ObjectPattern";
        if (refDestructuringErrors) {
          this.checkPatternErrors(refDestructuringErrors, true);
        }
        for (var i = 0, list2 = node2.properties; i < list2.length; i += 1) {
          var prop = list2[i];
          this.toAssignable(prop, isBinding);
          if (prop.type === "RestElement" && (prop.argument.type === "ArrayPattern" || prop.argument.type === "ObjectPattern")) {
            this.raise(prop.argument.start, "Unexpected token");
          }
        }
        break;
      case "Property":
        if (node2.kind !== "init") {
          this.raise(node2.key.start, "Object pattern can't contain getter or setter");
        }
        this.toAssignable(node2.value, isBinding);
        break;
      case "ArrayExpression":
        node2.type = "ArrayPattern";
        if (refDestructuringErrors) {
          this.checkPatternErrors(refDestructuringErrors, true);
        }
        this.toAssignableList(node2.elements, isBinding);
        break;
      case "SpreadElement":
        node2.type = "RestElement";
        this.toAssignable(node2.argument, isBinding);
        if (node2.argument.type === "AssignmentPattern") {
          this.raise(node2.argument.start, "Rest elements cannot have a default value");
        }
        break;
      case "AssignmentExpression":
        if (node2.operator !== "=") {
          this.raise(node2.left.end, "Only '=' operator can be used for specifying default value.");
        }
        node2.type = "AssignmentPattern";
        delete node2.operator;
        this.toAssignable(node2.left, isBinding);
      case "AssignmentPattern":
        break;
      case "ParenthesizedExpression":
        this.toAssignable(node2.expression, isBinding, refDestructuringErrors);
        break;
      case "ChainExpression":
        this.raiseRecoverable(node2.start, "Optional chaining cannot appear in left-hand side");
        break;
      case "MemberExpression":
        if (!isBinding) {
          break;
        }
      default:
        this.raise(node2.start, "Assigning to rvalue");
    }
  } else if (refDestructuringErrors) {
    this.checkPatternErrors(refDestructuringErrors, true);
  }
  return node2;
};
pp$2.toAssignableList = function(exprList, isBinding) {
  var end = exprList.length;
  for (var i = 0; i < end; i++) {
    var elt = exprList[i];
    if (elt) {
      this.toAssignable(elt, isBinding);
    }
  }
  if (end) {
    var last = exprList[end - 1];
    if (this.options.ecmaVersion === 6 && isBinding && last && last.type === "RestElement" && last.argument.type !== "Identifier") {
      this.unexpected(last.argument.start);
    }
  }
  return exprList;
};
pp$2.parseSpread = function(refDestructuringErrors) {
  var node2 = this.startNode();
  this.next();
  node2.argument = this.parseMaybeAssign(false, refDestructuringErrors);
  return this.finishNode(node2, "SpreadElement");
};
pp$2.parseRestBinding = function() {
  var node2 = this.startNode();
  this.next();
  if (this.options.ecmaVersion === 6 && this.type !== types.name) {
    this.unexpected();
  }
  node2.argument = this.parseBindingAtom();
  return this.finishNode(node2, "RestElement");
};
pp$2.parseBindingAtom = function() {
  if (this.options.ecmaVersion >= 6) {
    switch (this.type) {
      case types.bracketL:
        var node2 = this.startNode();
        this.next();
        node2.elements = this.parseBindingList(types.bracketR, true, true);
        return this.finishNode(node2, "ArrayPattern");
      case types.braceL:
        return this.parseObj(true);
    }
  }
  return this.parseIdent();
};
pp$2.parseBindingList = function(close, allowEmpty, allowTrailingComma) {
  var elts = [], first = true;
  while (!this.eat(close)) {
    if (first) {
      first = false;
    } else {
      this.expect(types.comma);
    }
    if (allowEmpty && this.type === types.comma) {
      elts.push(null);
    } else if (allowTrailingComma && this.afterTrailingComma(close)) {
      break;
    } else if (this.type === types.ellipsis) {
      var rest = this.parseRestBinding();
      this.parseBindingListItem(rest);
      elts.push(rest);
      if (this.type === types.comma) {
        this.raise(this.start, "Comma is not permitted after the rest element");
      }
      this.expect(close);
      break;
    } else {
      var elem = this.parseMaybeDefault(this.start, this.startLoc);
      this.parseBindingListItem(elem);
      elts.push(elem);
    }
  }
  return elts;
};
pp$2.parseBindingListItem = function(param) {
  return param;
};
pp$2.parseMaybeDefault = function(startPos, startLoc, left) {
  left = left || this.parseBindingAtom();
  if (this.options.ecmaVersion < 6 || !this.eat(types.eq)) {
    return left;
  }
  var node2 = this.startNodeAt(startPos, startLoc);
  node2.left = left;
  node2.right = this.parseMaybeAssign();
  return this.finishNode(node2, "AssignmentPattern");
};
pp$2.checkLVal = function(expr, bindingType, checkClashes) {
  if (bindingType === void 0)
    bindingType = BIND_NONE;
  switch (expr.type) {
    case "Identifier":
      if (bindingType === BIND_LEXICAL && expr.name === "let") {
        this.raiseRecoverable(expr.start, "let is disallowed as a lexically bound name");
      }
      if (this.strict && this.reservedWordsStrictBind.test(expr.name)) {
        this.raiseRecoverable(expr.start, (bindingType ? "Binding " : "Assigning to ") + expr.name + " in strict mode");
      }
      if (checkClashes) {
        if (has(checkClashes, expr.name)) {
          this.raiseRecoverable(expr.start, "Argument name clash");
        }
        checkClashes[expr.name] = true;
      }
      if (bindingType !== BIND_NONE && bindingType !== BIND_OUTSIDE) {
        this.declareName(expr.name, bindingType, expr.start);
      }
      break;
    case "ChainExpression":
      this.raiseRecoverable(expr.start, "Optional chaining cannot appear in left-hand side");
      break;
    case "MemberExpression":
      if (bindingType) {
        this.raiseRecoverable(expr.start, "Binding member expression");
      }
      break;
    case "ObjectPattern":
      for (var i = 0, list2 = expr.properties; i < list2.length; i += 1) {
        var prop = list2[i];
        this.checkLVal(prop, bindingType, checkClashes);
      }
      break;
    case "Property":
      this.checkLVal(expr.value, bindingType, checkClashes);
      break;
    case "ArrayPattern":
      for (var i$1 = 0, list$1 = expr.elements; i$1 < list$1.length; i$1 += 1) {
        var elem = list$1[i$1];
        if (elem) {
          this.checkLVal(elem, bindingType, checkClashes);
        }
      }
      break;
    case "AssignmentPattern":
      this.checkLVal(expr.left, bindingType, checkClashes);
      break;
    case "RestElement":
      this.checkLVal(expr.argument, bindingType, checkClashes);
      break;
    case "ParenthesizedExpression":
      this.checkLVal(expr.expression, bindingType, checkClashes);
      break;
    default:
      this.raise(expr.start, (bindingType ? "Binding" : "Assigning to") + " rvalue");
  }
};
var pp$3 = Parser.prototype;
pp$3.checkPropClash = function(prop, propHash, refDestructuringErrors) {
  if (this.options.ecmaVersion >= 9 && prop.type === "SpreadElement") {
    return;
  }
  if (this.options.ecmaVersion >= 6 && (prop.computed || prop.method || prop.shorthand)) {
    return;
  }
  var key = prop.key;
  var name;
  switch (key.type) {
    case "Identifier":
      name = key.name;
      break;
    case "Literal":
      name = String(key.value);
      break;
    default:
      return;
  }
  var kind = prop.kind;
  if (this.options.ecmaVersion >= 6) {
    if (name === "__proto__" && kind === "init") {
      if (propHash.proto) {
        if (refDestructuringErrors) {
          if (refDestructuringErrors.doubleProto < 0) {
            refDestructuringErrors.doubleProto = key.start;
          }
        } else {
          this.raiseRecoverable(key.start, "Redefinition of __proto__ property");
        }
      }
      propHash.proto = true;
    }
    return;
  }
  name = "$" + name;
  var other = propHash[name];
  if (other) {
    var redefinition;
    if (kind === "init") {
      redefinition = this.strict && other.init || other.get || other.set;
    } else {
      redefinition = other.init || other[kind];
    }
    if (redefinition) {
      this.raiseRecoverable(key.start, "Redefinition of property");
    }
  } else {
    other = propHash[name] = {
      init: false,
      get: false,
      set: false
    };
  }
  other[kind] = true;
};
pp$3.parseExpression = function(noIn, refDestructuringErrors) {
  var startPos = this.start, startLoc = this.startLoc;
  var expr = this.parseMaybeAssign(noIn, refDestructuringErrors);
  if (this.type === types.comma) {
    var node2 = this.startNodeAt(startPos, startLoc);
    node2.expressions = [expr];
    while (this.eat(types.comma)) {
      node2.expressions.push(this.parseMaybeAssign(noIn, refDestructuringErrors));
    }
    return this.finishNode(node2, "SequenceExpression");
  }
  return expr;
};
pp$3.parseMaybeAssign = function(noIn, refDestructuringErrors, afterLeftParse) {
  if (this.isContextual("yield")) {
    if (this.inGenerator) {
      return this.parseYield(noIn);
    } else {
      this.exprAllowed = false;
    }
  }
  var ownDestructuringErrors = false, oldParenAssign = -1, oldTrailingComma = -1;
  if (refDestructuringErrors) {
    oldParenAssign = refDestructuringErrors.parenthesizedAssign;
    oldTrailingComma = refDestructuringErrors.trailingComma;
    refDestructuringErrors.parenthesizedAssign = refDestructuringErrors.trailingComma = -1;
  } else {
    refDestructuringErrors = new DestructuringErrors();
    ownDestructuringErrors = true;
  }
  var startPos = this.start, startLoc = this.startLoc;
  if (this.type === types.parenL || this.type === types.name) {
    this.potentialArrowAt = this.start;
  }
  var left = this.parseMaybeConditional(noIn, refDestructuringErrors);
  if (afterLeftParse) {
    left = afterLeftParse.call(this, left, startPos, startLoc);
  }
  if (this.type.isAssign) {
    var node2 = this.startNodeAt(startPos, startLoc);
    node2.operator = this.value;
    node2.left = this.type === types.eq ? this.toAssignable(left, false, refDestructuringErrors) : left;
    if (!ownDestructuringErrors) {
      refDestructuringErrors.parenthesizedAssign = refDestructuringErrors.trailingComma = refDestructuringErrors.doubleProto = -1;
    }
    if (refDestructuringErrors.shorthandAssign >= node2.left.start) {
      refDestructuringErrors.shorthandAssign = -1;
    }
    this.checkLVal(left);
    this.next();
    node2.right = this.parseMaybeAssign(noIn);
    return this.finishNode(node2, "AssignmentExpression");
  } else {
    if (ownDestructuringErrors) {
      this.checkExpressionErrors(refDestructuringErrors, true);
    }
  }
  if (oldParenAssign > -1) {
    refDestructuringErrors.parenthesizedAssign = oldParenAssign;
  }
  if (oldTrailingComma > -1) {
    refDestructuringErrors.trailingComma = oldTrailingComma;
  }
  return left;
};
pp$3.parseMaybeConditional = function(noIn, refDestructuringErrors) {
  var startPos = this.start, startLoc = this.startLoc;
  var expr = this.parseExprOps(noIn, refDestructuringErrors);
  if (this.checkExpressionErrors(refDestructuringErrors)) {
    return expr;
  }
  if (this.eat(types.question)) {
    var node2 = this.startNodeAt(startPos, startLoc);
    node2.test = expr;
    node2.consequent = this.parseMaybeAssign();
    this.expect(types.colon);
    node2.alternate = this.parseMaybeAssign(noIn);
    return this.finishNode(node2, "ConditionalExpression");
  }
  return expr;
};
pp$3.parseExprOps = function(noIn, refDestructuringErrors) {
  var startPos = this.start, startLoc = this.startLoc;
  var expr = this.parseMaybeUnary(refDestructuringErrors, false);
  if (this.checkExpressionErrors(refDestructuringErrors)) {
    return expr;
  }
  return expr.start === startPos && expr.type === "ArrowFunctionExpression" ? expr : this.parseExprOp(expr, startPos, startLoc, -1, noIn);
};
pp$3.parseExprOp = function(left, leftStartPos, leftStartLoc, minPrec, noIn) {
  var prec = this.type.binop;
  if (prec != null && (!noIn || this.type !== types._in)) {
    if (prec > minPrec) {
      var logical = this.type === types.logicalOR || this.type === types.logicalAND;
      var coalesce = this.type === types.coalesce;
      if (coalesce) {
        prec = types.logicalAND.binop;
      }
      var op = this.value;
      this.next();
      var startPos = this.start, startLoc = this.startLoc;
      var right = this.parseExprOp(this.parseMaybeUnary(null, false), startPos, startLoc, prec, noIn);
      var node2 = this.buildBinary(leftStartPos, leftStartLoc, left, right, op, logical || coalesce);
      if (logical && this.type === types.coalesce || coalesce && (this.type === types.logicalOR || this.type === types.logicalAND)) {
        this.raiseRecoverable(this.start, "Logical expressions and coalesce expressions cannot be mixed. Wrap either by parentheses");
      }
      return this.parseExprOp(node2, leftStartPos, leftStartLoc, minPrec, noIn);
    }
  }
  return left;
};
pp$3.buildBinary = function(startPos, startLoc, left, right, op, logical) {
  var node2 = this.startNodeAt(startPos, startLoc);
  node2.left = left;
  node2.operator = op;
  node2.right = right;
  return this.finishNode(node2, logical ? "LogicalExpression" : "BinaryExpression");
};
pp$3.parseMaybeUnary = function(refDestructuringErrors, sawUnary) {
  var startPos = this.start, startLoc = this.startLoc, expr;
  if (this.isContextual("await") && (this.inAsync || !this.inFunction && this.options.allowAwaitOutsideFunction)) {
    expr = this.parseAwait();
    sawUnary = true;
  } else if (this.type.prefix) {
    var node2 = this.startNode(), update = this.type === types.incDec;
    node2.operator = this.value;
    node2.prefix = true;
    this.next();
    node2.argument = this.parseMaybeUnary(null, true);
    this.checkExpressionErrors(refDestructuringErrors, true);
    if (update) {
      this.checkLVal(node2.argument);
    } else if (this.strict && node2.operator === "delete" && node2.argument.type === "Identifier") {
      this.raiseRecoverable(node2.start, "Deleting local variable in strict mode");
    } else {
      sawUnary = true;
    }
    expr = this.finishNode(node2, update ? "UpdateExpression" : "UnaryExpression");
  } else {
    expr = this.parseExprSubscripts(refDestructuringErrors);
    if (this.checkExpressionErrors(refDestructuringErrors)) {
      return expr;
    }
    while (this.type.postfix && !this.canInsertSemicolon()) {
      var node$1 = this.startNodeAt(startPos, startLoc);
      node$1.operator = this.value;
      node$1.prefix = false;
      node$1.argument = expr;
      this.checkLVal(expr);
      this.next();
      expr = this.finishNode(node$1, "UpdateExpression");
    }
  }
  if (!sawUnary && this.eat(types.starstar)) {
    return this.buildBinary(startPos, startLoc, expr, this.parseMaybeUnary(null, false), "**", false);
  } else {
    return expr;
  }
};
pp$3.parseExprSubscripts = function(refDestructuringErrors) {
  var startPos = this.start, startLoc = this.startLoc;
  var expr = this.parseExprAtom(refDestructuringErrors);
  if (expr.type === "ArrowFunctionExpression" && this.input.slice(this.lastTokStart, this.lastTokEnd) !== ")") {
    return expr;
  }
  var result = this.parseSubscripts(expr, startPos, startLoc);
  if (refDestructuringErrors && result.type === "MemberExpression") {
    if (refDestructuringErrors.parenthesizedAssign >= result.start) {
      refDestructuringErrors.parenthesizedAssign = -1;
    }
    if (refDestructuringErrors.parenthesizedBind >= result.start) {
      refDestructuringErrors.parenthesizedBind = -1;
    }
  }
  return result;
};
pp$3.parseSubscripts = function(base, startPos, startLoc, noCalls) {
  var maybeAsyncArrow = this.options.ecmaVersion >= 8 && base.type === "Identifier" && base.name === "async" && this.lastTokEnd === base.end && !this.canInsertSemicolon() && base.end - base.start === 5 && this.potentialArrowAt === base.start;
  var optionalChained = false;
  while (true) {
    var element2 = this.parseSubscript(base, startPos, startLoc, noCalls, maybeAsyncArrow, optionalChained);
    if (element2.optional) {
      optionalChained = true;
    }
    if (element2 === base || element2.type === "ArrowFunctionExpression") {
      if (optionalChained) {
        var chainNode = this.startNodeAt(startPos, startLoc);
        chainNode.expression = element2;
        element2 = this.finishNode(chainNode, "ChainExpression");
      }
      return element2;
    }
    base = element2;
  }
};
pp$3.parseSubscript = function(base, startPos, startLoc, noCalls, maybeAsyncArrow, optionalChained) {
  var optionalSupported = this.options.ecmaVersion >= 11;
  var optional = optionalSupported && this.eat(types.questionDot);
  if (noCalls && optional) {
    this.raise(this.lastTokStart, "Optional chaining cannot appear in the callee of new expressions");
  }
  var computed = this.eat(types.bracketL);
  if (computed || optional && this.type !== types.parenL && this.type !== types.backQuote || this.eat(types.dot)) {
    var node2 = this.startNodeAt(startPos, startLoc);
    node2.object = base;
    node2.property = computed ? this.parseExpression() : this.parseIdent(this.options.allowReserved !== "never");
    node2.computed = !!computed;
    if (computed) {
      this.expect(types.bracketR);
    }
    if (optionalSupported) {
      node2.optional = optional;
    }
    base = this.finishNode(node2, "MemberExpression");
  } else if (!noCalls && this.eat(types.parenL)) {
    var refDestructuringErrors = new DestructuringErrors(), oldYieldPos = this.yieldPos, oldAwaitPos = this.awaitPos, oldAwaitIdentPos = this.awaitIdentPos;
    this.yieldPos = 0;
    this.awaitPos = 0;
    this.awaitIdentPos = 0;
    var exprList = this.parseExprList(types.parenR, this.options.ecmaVersion >= 8, false, refDestructuringErrors);
    if (maybeAsyncArrow && !optional && !this.canInsertSemicolon() && this.eat(types.arrow)) {
      this.checkPatternErrors(refDestructuringErrors, false);
      this.checkYieldAwaitInDefaultParams();
      if (this.awaitIdentPos > 0) {
        this.raise(this.awaitIdentPos, "Cannot use 'await' as identifier inside an async function");
      }
      this.yieldPos = oldYieldPos;
      this.awaitPos = oldAwaitPos;
      this.awaitIdentPos = oldAwaitIdentPos;
      return this.parseArrowExpression(this.startNodeAt(startPos, startLoc), exprList, true);
    }
    this.checkExpressionErrors(refDestructuringErrors, true);
    this.yieldPos = oldYieldPos || this.yieldPos;
    this.awaitPos = oldAwaitPos || this.awaitPos;
    this.awaitIdentPos = oldAwaitIdentPos || this.awaitIdentPos;
    var node$1 = this.startNodeAt(startPos, startLoc);
    node$1.callee = base;
    node$1.arguments = exprList;
    if (optionalSupported) {
      node$1.optional = optional;
    }
    base = this.finishNode(node$1, "CallExpression");
  } else if (this.type === types.backQuote) {
    if (optional || optionalChained) {
      this.raise(this.start, "Optional chaining cannot appear in the tag of tagged template expressions");
    }
    var node$2 = this.startNodeAt(startPos, startLoc);
    node$2.tag = base;
    node$2.quasi = this.parseTemplate({isTagged: true});
    base = this.finishNode(node$2, "TaggedTemplateExpression");
  }
  return base;
};
pp$3.parseExprAtom = function(refDestructuringErrors) {
  if (this.type === types.slash) {
    this.readRegexp();
  }
  var node2, canBeArrow = this.potentialArrowAt === this.start;
  switch (this.type) {
    case types._super:
      if (!this.allowSuper) {
        this.raise(this.start, "'super' keyword outside a method");
      }
      node2 = this.startNode();
      this.next();
      if (this.type === types.parenL && !this.allowDirectSuper) {
        this.raise(node2.start, "super() call outside constructor of a subclass");
      }
      if (this.type !== types.dot && this.type !== types.bracketL && this.type !== types.parenL) {
        this.unexpected();
      }
      return this.finishNode(node2, "Super");
    case types._this:
      node2 = this.startNode();
      this.next();
      return this.finishNode(node2, "ThisExpression");
    case types.name:
      var startPos = this.start, startLoc = this.startLoc, containsEsc = this.containsEsc;
      var id2 = this.parseIdent(false);
      if (this.options.ecmaVersion >= 8 && !containsEsc && id2.name === "async" && !this.canInsertSemicolon() && this.eat(types._function)) {
        return this.parseFunction(this.startNodeAt(startPos, startLoc), 0, false, true);
      }
      if (canBeArrow && !this.canInsertSemicolon()) {
        if (this.eat(types.arrow)) {
          return this.parseArrowExpression(this.startNodeAt(startPos, startLoc), [id2], false);
        }
        if (this.options.ecmaVersion >= 8 && id2.name === "async" && this.type === types.name && !containsEsc) {
          id2 = this.parseIdent(false);
          if (this.canInsertSemicolon() || !this.eat(types.arrow)) {
            this.unexpected();
          }
          return this.parseArrowExpression(this.startNodeAt(startPos, startLoc), [id2], true);
        }
      }
      return id2;
    case types.regexp:
      var value2 = this.value;
      node2 = this.parseLiteral(value2.value);
      node2.regex = {pattern: value2.pattern, flags: value2.flags};
      return node2;
    case types.num:
    case types.string:
      return this.parseLiteral(this.value);
    case types._null:
    case types._true:
    case types._false:
      node2 = this.startNode();
      node2.value = this.type === types._null ? null : this.type === types._true;
      node2.raw = this.type.keyword;
      this.next();
      return this.finishNode(node2, "Literal");
    case types.parenL:
      var start = this.start, expr = this.parseParenAndDistinguishExpression(canBeArrow);
      if (refDestructuringErrors) {
        if (refDestructuringErrors.parenthesizedAssign < 0 && !this.isSimpleAssignTarget(expr)) {
          refDestructuringErrors.parenthesizedAssign = start;
        }
        if (refDestructuringErrors.parenthesizedBind < 0) {
          refDestructuringErrors.parenthesizedBind = start;
        }
      }
      return expr;
    case types.bracketL:
      node2 = this.startNode();
      this.next();
      node2.elements = this.parseExprList(types.bracketR, true, true, refDestructuringErrors);
      return this.finishNode(node2, "ArrayExpression");
    case types.braceL:
      return this.parseObj(false, refDestructuringErrors);
    case types._function:
      node2 = this.startNode();
      this.next();
      return this.parseFunction(node2, 0);
    case types._class:
      return this.parseClass(this.startNode(), false);
    case types._new:
      return this.parseNew();
    case types.backQuote:
      return this.parseTemplate();
    case types._import:
      if (this.options.ecmaVersion >= 11) {
        return this.parseExprImport();
      } else {
        return this.unexpected();
      }
    default:
      this.unexpected();
  }
};
pp$3.parseExprImport = function() {
  var node2 = this.startNode();
  if (this.containsEsc) {
    this.raiseRecoverable(this.start, "Escape sequence in keyword import");
  }
  var meta = this.parseIdent(true);
  switch (this.type) {
    case types.parenL:
      return this.parseDynamicImport(node2);
    case types.dot:
      node2.meta = meta;
      return this.parseImportMeta(node2);
    default:
      this.unexpected();
  }
};
pp$3.parseDynamicImport = function(node2) {
  this.next();
  node2.source = this.parseMaybeAssign();
  if (!this.eat(types.parenR)) {
    var errorPos = this.start;
    if (this.eat(types.comma) && this.eat(types.parenR)) {
      this.raiseRecoverable(errorPos, "Trailing comma is not allowed in import()");
    } else {
      this.unexpected(errorPos);
    }
  }
  return this.finishNode(node2, "ImportExpression");
};
pp$3.parseImportMeta = function(node2) {
  this.next();
  var containsEsc = this.containsEsc;
  node2.property = this.parseIdent(true);
  if (node2.property.name !== "meta") {
    this.raiseRecoverable(node2.property.start, "The only valid meta property for import is 'import.meta'");
  }
  if (containsEsc) {
    this.raiseRecoverable(node2.start, "'import.meta' must not contain escaped characters");
  }
  if (this.options.sourceType !== "module") {
    this.raiseRecoverable(node2.start, "Cannot use 'import.meta' outside a module");
  }
  return this.finishNode(node2, "MetaProperty");
};
pp$3.parseLiteral = function(value2) {
  var node2 = this.startNode();
  node2.value = value2;
  node2.raw = this.input.slice(this.start, this.end);
  if (node2.raw.charCodeAt(node2.raw.length - 1) === 110) {
    node2.bigint = node2.raw.slice(0, -1).replace(/_/g, "");
  }
  this.next();
  return this.finishNode(node2, "Literal");
};
pp$3.parseParenExpression = function() {
  this.expect(types.parenL);
  var val = this.parseExpression();
  this.expect(types.parenR);
  return val;
};
pp$3.parseParenAndDistinguishExpression = function(canBeArrow) {
  var startPos = this.start, startLoc = this.startLoc, val, allowTrailingComma = this.options.ecmaVersion >= 8;
  if (this.options.ecmaVersion >= 6) {
    this.next();
    var innerStartPos = this.start, innerStartLoc = this.startLoc;
    var exprList = [], first = true, lastIsComma = false;
    var refDestructuringErrors = new DestructuringErrors(), oldYieldPos = this.yieldPos, oldAwaitPos = this.awaitPos, spreadStart;
    this.yieldPos = 0;
    this.awaitPos = 0;
    while (this.type !== types.parenR) {
      first ? first = false : this.expect(types.comma);
      if (allowTrailingComma && this.afterTrailingComma(types.parenR, true)) {
        lastIsComma = true;
        break;
      } else if (this.type === types.ellipsis) {
        spreadStart = this.start;
        exprList.push(this.parseParenItem(this.parseRestBinding()));
        if (this.type === types.comma) {
          this.raise(this.start, "Comma is not permitted after the rest element");
        }
        break;
      } else {
        exprList.push(this.parseMaybeAssign(false, refDestructuringErrors, this.parseParenItem));
      }
    }
    var innerEndPos = this.start, innerEndLoc = this.startLoc;
    this.expect(types.parenR);
    if (canBeArrow && !this.canInsertSemicolon() && this.eat(types.arrow)) {
      this.checkPatternErrors(refDestructuringErrors, false);
      this.checkYieldAwaitInDefaultParams();
      this.yieldPos = oldYieldPos;
      this.awaitPos = oldAwaitPos;
      return this.parseParenArrowList(startPos, startLoc, exprList);
    }
    if (!exprList.length || lastIsComma) {
      this.unexpected(this.lastTokStart);
    }
    if (spreadStart) {
      this.unexpected(spreadStart);
    }
    this.checkExpressionErrors(refDestructuringErrors, true);
    this.yieldPos = oldYieldPos || this.yieldPos;
    this.awaitPos = oldAwaitPos || this.awaitPos;
    if (exprList.length > 1) {
      val = this.startNodeAt(innerStartPos, innerStartLoc);
      val.expressions = exprList;
      this.finishNodeAt(val, "SequenceExpression", innerEndPos, innerEndLoc);
    } else {
      val = exprList[0];
    }
  } else {
    val = this.parseParenExpression();
  }
  if (this.options.preserveParens) {
    var par = this.startNodeAt(startPos, startLoc);
    par.expression = val;
    return this.finishNode(par, "ParenthesizedExpression");
  } else {
    return val;
  }
};
pp$3.parseParenItem = function(item) {
  return item;
};
pp$3.parseParenArrowList = function(startPos, startLoc, exprList) {
  return this.parseArrowExpression(this.startNodeAt(startPos, startLoc), exprList);
};
var empty$1 = [];
pp$3.parseNew = function() {
  if (this.containsEsc) {
    this.raiseRecoverable(this.start, "Escape sequence in keyword new");
  }
  var node2 = this.startNode();
  var meta = this.parseIdent(true);
  if (this.options.ecmaVersion >= 6 && this.eat(types.dot)) {
    node2.meta = meta;
    var containsEsc = this.containsEsc;
    node2.property = this.parseIdent(true);
    if (node2.property.name !== "target") {
      this.raiseRecoverable(node2.property.start, "The only valid meta property for new is 'new.target'");
    }
    if (containsEsc) {
      this.raiseRecoverable(node2.start, "'new.target' must not contain escaped characters");
    }
    if (!this.inNonArrowFunction()) {
      this.raiseRecoverable(node2.start, "'new.target' can only be used in functions");
    }
    return this.finishNode(node2, "MetaProperty");
  }
  var startPos = this.start, startLoc = this.startLoc, isImport = this.type === types._import;
  node2.callee = this.parseSubscripts(this.parseExprAtom(), startPos, startLoc, true);
  if (isImport && node2.callee.type === "ImportExpression") {
    this.raise(startPos, "Cannot use new with import()");
  }
  if (this.eat(types.parenL)) {
    node2.arguments = this.parseExprList(types.parenR, this.options.ecmaVersion >= 8, false);
  } else {
    node2.arguments = empty$1;
  }
  return this.finishNode(node2, "NewExpression");
};
pp$3.parseTemplateElement = function(ref2) {
  var isTagged = ref2.isTagged;
  var elem = this.startNode();
  if (this.type === types.invalidTemplate) {
    if (!isTagged) {
      this.raiseRecoverable(this.start, "Bad escape sequence in untagged template literal");
    }
    elem.value = {
      raw: this.value,
      cooked: null
    };
  } else {
    elem.value = {
      raw: this.input.slice(this.start, this.end).replace(/\r\n?/g, "\n"),
      cooked: this.value
    };
  }
  this.next();
  elem.tail = this.type === types.backQuote;
  return this.finishNode(elem, "TemplateElement");
};
pp$3.parseTemplate = function(ref2) {
  if (ref2 === void 0)
    ref2 = {};
  var isTagged = ref2.isTagged;
  if (isTagged === void 0)
    isTagged = false;
  var node2 = this.startNode();
  this.next();
  node2.expressions = [];
  var curElt = this.parseTemplateElement({isTagged});
  node2.quasis = [curElt];
  while (!curElt.tail) {
    if (this.type === types.eof) {
      this.raise(this.pos, "Unterminated template literal");
    }
    this.expect(types.dollarBraceL);
    node2.expressions.push(this.parseExpression());
    this.expect(types.braceR);
    node2.quasis.push(curElt = this.parseTemplateElement({isTagged}));
  }
  this.next();
  return this.finishNode(node2, "TemplateLiteral");
};
pp$3.isAsyncProp = function(prop) {
  return !prop.computed && prop.key.type === "Identifier" && prop.key.name === "async" && (this.type === types.name || this.type === types.num || this.type === types.string || this.type === types.bracketL || this.type.keyword || this.options.ecmaVersion >= 9 && this.type === types.star) && !lineBreak.test(this.input.slice(this.lastTokEnd, this.start));
};
pp$3.parseObj = function(isPattern, refDestructuringErrors) {
  var node2 = this.startNode(), first = true, propHash = {};
  node2.properties = [];
  this.next();
  while (!this.eat(types.braceR)) {
    if (!first) {
      this.expect(types.comma);
      if (this.options.ecmaVersion >= 5 && this.afterTrailingComma(types.braceR)) {
        break;
      }
    } else {
      first = false;
    }
    var prop = this.parseProperty(isPattern, refDestructuringErrors);
    if (!isPattern) {
      this.checkPropClash(prop, propHash, refDestructuringErrors);
    }
    node2.properties.push(prop);
  }
  return this.finishNode(node2, isPattern ? "ObjectPattern" : "ObjectExpression");
};
pp$3.parseProperty = function(isPattern, refDestructuringErrors) {
  var prop = this.startNode(), isGenerator, isAsync, startPos, startLoc;
  if (this.options.ecmaVersion >= 9 && this.eat(types.ellipsis)) {
    if (isPattern) {
      prop.argument = this.parseIdent(false);
      if (this.type === types.comma) {
        this.raise(this.start, "Comma is not permitted after the rest element");
      }
      return this.finishNode(prop, "RestElement");
    }
    if (this.type === types.parenL && refDestructuringErrors) {
      if (refDestructuringErrors.parenthesizedAssign < 0) {
        refDestructuringErrors.parenthesizedAssign = this.start;
      }
      if (refDestructuringErrors.parenthesizedBind < 0) {
        refDestructuringErrors.parenthesizedBind = this.start;
      }
    }
    prop.argument = this.parseMaybeAssign(false, refDestructuringErrors);
    if (this.type === types.comma && refDestructuringErrors && refDestructuringErrors.trailingComma < 0) {
      refDestructuringErrors.trailingComma = this.start;
    }
    return this.finishNode(prop, "SpreadElement");
  }
  if (this.options.ecmaVersion >= 6) {
    prop.method = false;
    prop.shorthand = false;
    if (isPattern || refDestructuringErrors) {
      startPos = this.start;
      startLoc = this.startLoc;
    }
    if (!isPattern) {
      isGenerator = this.eat(types.star);
    }
  }
  var containsEsc = this.containsEsc;
  this.parsePropertyName(prop);
  if (!isPattern && !containsEsc && this.options.ecmaVersion >= 8 && !isGenerator && this.isAsyncProp(prop)) {
    isAsync = true;
    isGenerator = this.options.ecmaVersion >= 9 && this.eat(types.star);
    this.parsePropertyName(prop, refDestructuringErrors);
  } else {
    isAsync = false;
  }
  this.parsePropertyValue(prop, isPattern, isGenerator, isAsync, startPos, startLoc, refDestructuringErrors, containsEsc);
  return this.finishNode(prop, "Property");
};
pp$3.parsePropertyValue = function(prop, isPattern, isGenerator, isAsync, startPos, startLoc, refDestructuringErrors, containsEsc) {
  if ((isGenerator || isAsync) && this.type === types.colon) {
    this.unexpected();
  }
  if (this.eat(types.colon)) {
    prop.value = isPattern ? this.parseMaybeDefault(this.start, this.startLoc) : this.parseMaybeAssign(false, refDestructuringErrors);
    prop.kind = "init";
  } else if (this.options.ecmaVersion >= 6 && this.type === types.parenL) {
    if (isPattern) {
      this.unexpected();
    }
    prop.kind = "init";
    prop.method = true;
    prop.value = this.parseMethod(isGenerator, isAsync);
  } else if (!isPattern && !containsEsc && this.options.ecmaVersion >= 5 && !prop.computed && prop.key.type === "Identifier" && (prop.key.name === "get" || prop.key.name === "set") && (this.type !== types.comma && this.type !== types.braceR && this.type !== types.eq)) {
    if (isGenerator || isAsync) {
      this.unexpected();
    }
    prop.kind = prop.key.name;
    this.parsePropertyName(prop);
    prop.value = this.parseMethod(false);
    var paramCount = prop.kind === "get" ? 0 : 1;
    if (prop.value.params.length !== paramCount) {
      var start = prop.value.start;
      if (prop.kind === "get") {
        this.raiseRecoverable(start, "getter should have no params");
      } else {
        this.raiseRecoverable(start, "setter should have exactly one param");
      }
    } else {
      if (prop.kind === "set" && prop.value.params[0].type === "RestElement") {
        this.raiseRecoverable(prop.value.params[0].start, "Setter cannot use rest params");
      }
    }
  } else if (this.options.ecmaVersion >= 6 && !prop.computed && prop.key.type === "Identifier") {
    if (isGenerator || isAsync) {
      this.unexpected();
    }
    this.checkUnreserved(prop.key);
    if (prop.key.name === "await" && !this.awaitIdentPos) {
      this.awaitIdentPos = startPos;
    }
    prop.kind = "init";
    if (isPattern) {
      prop.value = this.parseMaybeDefault(startPos, startLoc, prop.key);
    } else if (this.type === types.eq && refDestructuringErrors) {
      if (refDestructuringErrors.shorthandAssign < 0) {
        refDestructuringErrors.shorthandAssign = this.start;
      }
      prop.value = this.parseMaybeDefault(startPos, startLoc, prop.key);
    } else {
      prop.value = prop.key;
    }
    prop.shorthand = true;
  } else {
    this.unexpected();
  }
};
pp$3.parsePropertyName = function(prop) {
  if (this.options.ecmaVersion >= 6) {
    if (this.eat(types.bracketL)) {
      prop.computed = true;
      prop.key = this.parseMaybeAssign();
      this.expect(types.bracketR);
      return prop.key;
    } else {
      prop.computed = false;
    }
  }
  return prop.key = this.type === types.num || this.type === types.string ? this.parseExprAtom() : this.parseIdent(this.options.allowReserved !== "never");
};
pp$3.initFunction = function(node2) {
  node2.id = null;
  if (this.options.ecmaVersion >= 6) {
    node2.generator = node2.expression = false;
  }
  if (this.options.ecmaVersion >= 8) {
    node2.async = false;
  }
};
pp$3.parseMethod = function(isGenerator, isAsync, allowDirectSuper) {
  var node2 = this.startNode(), oldYieldPos = this.yieldPos, oldAwaitPos = this.awaitPos, oldAwaitIdentPos = this.awaitIdentPos;
  this.initFunction(node2);
  if (this.options.ecmaVersion >= 6) {
    node2.generator = isGenerator;
  }
  if (this.options.ecmaVersion >= 8) {
    node2.async = !!isAsync;
  }
  this.yieldPos = 0;
  this.awaitPos = 0;
  this.awaitIdentPos = 0;
  this.enterScope(functionFlags(isAsync, node2.generator) | SCOPE_SUPER | (allowDirectSuper ? SCOPE_DIRECT_SUPER : 0));
  this.expect(types.parenL);
  node2.params = this.parseBindingList(types.parenR, false, this.options.ecmaVersion >= 8);
  this.checkYieldAwaitInDefaultParams();
  this.parseFunctionBody(node2, false, true);
  this.yieldPos = oldYieldPos;
  this.awaitPos = oldAwaitPos;
  this.awaitIdentPos = oldAwaitIdentPos;
  return this.finishNode(node2, "FunctionExpression");
};
pp$3.parseArrowExpression = function(node2, params, isAsync) {
  var oldYieldPos = this.yieldPos, oldAwaitPos = this.awaitPos, oldAwaitIdentPos = this.awaitIdentPos;
  this.enterScope(functionFlags(isAsync, false) | SCOPE_ARROW);
  this.initFunction(node2);
  if (this.options.ecmaVersion >= 8) {
    node2.async = !!isAsync;
  }
  this.yieldPos = 0;
  this.awaitPos = 0;
  this.awaitIdentPos = 0;
  node2.params = this.toAssignableList(params, true);
  this.parseFunctionBody(node2, true, false);
  this.yieldPos = oldYieldPos;
  this.awaitPos = oldAwaitPos;
  this.awaitIdentPos = oldAwaitIdentPos;
  return this.finishNode(node2, "ArrowFunctionExpression");
};
pp$3.parseFunctionBody = function(node2, isArrowFunction, isMethod) {
  var isExpression = isArrowFunction && this.type !== types.braceL;
  var oldStrict = this.strict, useStrict = false;
  if (isExpression) {
    node2.body = this.parseMaybeAssign();
    node2.expression = true;
    this.checkParams(node2, false);
  } else {
    var nonSimple = this.options.ecmaVersion >= 7 && !this.isSimpleParamList(node2.params);
    if (!oldStrict || nonSimple) {
      useStrict = this.strictDirective(this.end);
      if (useStrict && nonSimple) {
        this.raiseRecoverable(node2.start, "Illegal 'use strict' directive in function with non-simple parameter list");
      }
    }
    var oldLabels = this.labels;
    this.labels = [];
    if (useStrict) {
      this.strict = true;
    }
    this.checkParams(node2, !oldStrict && !useStrict && !isArrowFunction && !isMethod && this.isSimpleParamList(node2.params));
    if (this.strict && node2.id) {
      this.checkLVal(node2.id, BIND_OUTSIDE);
    }
    node2.body = this.parseBlock(false, void 0, useStrict && !oldStrict);
    node2.expression = false;
    this.adaptDirectivePrologue(node2.body.body);
    this.labels = oldLabels;
  }
  this.exitScope();
};
pp$3.isSimpleParamList = function(params) {
  for (var i = 0, list2 = params; i < list2.length; i += 1) {
    var param = list2[i];
    if (param.type !== "Identifier") {
      return false;
    }
  }
  return true;
};
pp$3.checkParams = function(node2, allowDuplicates) {
  var nameHash = {};
  for (var i = 0, list2 = node2.params; i < list2.length; i += 1) {
    var param = list2[i];
    this.checkLVal(param, BIND_VAR, allowDuplicates ? null : nameHash);
  }
};
pp$3.parseExprList = function(close, allowTrailingComma, allowEmpty, refDestructuringErrors) {
  var elts = [], first = true;
  while (!this.eat(close)) {
    if (!first) {
      this.expect(types.comma);
      if (allowTrailingComma && this.afterTrailingComma(close)) {
        break;
      }
    } else {
      first = false;
    }
    var elt = void 0;
    if (allowEmpty && this.type === types.comma) {
      elt = null;
    } else if (this.type === types.ellipsis) {
      elt = this.parseSpread(refDestructuringErrors);
      if (refDestructuringErrors && this.type === types.comma && refDestructuringErrors.trailingComma < 0) {
        refDestructuringErrors.trailingComma = this.start;
      }
    } else {
      elt = this.parseMaybeAssign(false, refDestructuringErrors);
    }
    elts.push(elt);
  }
  return elts;
};
pp$3.checkUnreserved = function(ref2) {
  var start = ref2.start;
  var end = ref2.end;
  var name = ref2.name;
  if (this.inGenerator && name === "yield") {
    this.raiseRecoverable(start, "Cannot use 'yield' as identifier inside a generator");
  }
  if (this.inAsync && name === "await") {
    this.raiseRecoverable(start, "Cannot use 'await' as identifier inside an async function");
  }
  if (this.keywords.test(name)) {
    this.raise(start, "Unexpected keyword '" + name + "'");
  }
  if (this.options.ecmaVersion < 6 && this.input.slice(start, end).indexOf("\\") !== -1) {
    return;
  }
  var re2 = this.strict ? this.reservedWordsStrict : this.reservedWords;
  if (re2.test(name)) {
    if (!this.inAsync && name === "await") {
      this.raiseRecoverable(start, "Cannot use keyword 'await' outside an async function");
    }
    this.raiseRecoverable(start, "The keyword '" + name + "' is reserved");
  }
};
pp$3.parseIdent = function(liberal, isBinding) {
  var node2 = this.startNode();
  if (this.type === types.name) {
    node2.name = this.value;
  } else if (this.type.keyword) {
    node2.name = this.type.keyword;
    if ((node2.name === "class" || node2.name === "function") && (this.lastTokEnd !== this.lastTokStart + 1 || this.input.charCodeAt(this.lastTokStart) !== 46)) {
      this.context.pop();
    }
  } else {
    this.unexpected();
  }
  this.next(!!liberal);
  this.finishNode(node2, "Identifier");
  if (!liberal) {
    this.checkUnreserved(node2);
    if (node2.name === "await" && !this.awaitIdentPos) {
      this.awaitIdentPos = node2.start;
    }
  }
  return node2;
};
pp$3.parseYield = function(noIn) {
  if (!this.yieldPos) {
    this.yieldPos = this.start;
  }
  var node2 = this.startNode();
  this.next();
  if (this.type === types.semi || this.canInsertSemicolon() || this.type !== types.star && !this.type.startsExpr) {
    node2.delegate = false;
    node2.argument = null;
  } else {
    node2.delegate = this.eat(types.star);
    node2.argument = this.parseMaybeAssign(noIn);
  }
  return this.finishNode(node2, "YieldExpression");
};
pp$3.parseAwait = function() {
  if (!this.awaitPos) {
    this.awaitPos = this.start;
  }
  var node2 = this.startNode();
  this.next();
  node2.argument = this.parseMaybeUnary(null, false);
  return this.finishNode(node2, "AwaitExpression");
};
var pp$4 = Parser.prototype;
pp$4.raise = function(pos, message) {
  var loc = getLineInfo(this.input, pos);
  message += " (" + loc.line + ":" + loc.column + ")";
  var err = new SyntaxError(message);
  err.pos = pos;
  err.loc = loc;
  err.raisedAt = this.pos;
  throw err;
};
pp$4.raiseRecoverable = pp$4.raise;
pp$4.curPosition = function() {
  if (this.options.locations) {
    return new Position(this.curLine, this.pos - this.lineStart);
  }
};
var pp$5 = Parser.prototype;
var Scope = function Scope2(flags) {
  this.flags = flags;
  this.var = [];
  this.lexical = [];
  this.functions = [];
};
pp$5.enterScope = function(flags) {
  this.scopeStack.push(new Scope(flags));
};
pp$5.exitScope = function() {
  this.scopeStack.pop();
};
pp$5.treatFunctionsAsVarInScope = function(scope2) {
  return scope2.flags & SCOPE_FUNCTION || !this.inModule && scope2.flags & SCOPE_TOP;
};
pp$5.declareName = function(name, bindingType, pos) {
  var redeclared = false;
  if (bindingType === BIND_LEXICAL) {
    var scope2 = this.currentScope();
    redeclared = scope2.lexical.indexOf(name) > -1 || scope2.functions.indexOf(name) > -1 || scope2.var.indexOf(name) > -1;
    scope2.lexical.push(name);
    if (this.inModule && scope2.flags & SCOPE_TOP) {
      delete this.undefinedExports[name];
    }
  } else if (bindingType === BIND_SIMPLE_CATCH) {
    var scope$1 = this.currentScope();
    scope$1.lexical.push(name);
  } else if (bindingType === BIND_FUNCTION) {
    var scope$2 = this.currentScope();
    if (this.treatFunctionsAsVar) {
      redeclared = scope$2.lexical.indexOf(name) > -1;
    } else {
      redeclared = scope$2.lexical.indexOf(name) > -1 || scope$2.var.indexOf(name) > -1;
    }
    scope$2.functions.push(name);
  } else {
    for (var i = this.scopeStack.length - 1; i >= 0; --i) {
      var scope$3 = this.scopeStack[i];
      if (scope$3.lexical.indexOf(name) > -1 && !(scope$3.flags & SCOPE_SIMPLE_CATCH && scope$3.lexical[0] === name) || !this.treatFunctionsAsVarInScope(scope$3) && scope$3.functions.indexOf(name) > -1) {
        redeclared = true;
        break;
      }
      scope$3.var.push(name);
      if (this.inModule && scope$3.flags & SCOPE_TOP) {
        delete this.undefinedExports[name];
      }
      if (scope$3.flags & SCOPE_VAR) {
        break;
      }
    }
  }
  if (redeclared) {
    this.raiseRecoverable(pos, "Identifier '" + name + "' has already been declared");
  }
};
pp$5.checkLocalExport = function(id2) {
  if (this.scopeStack[0].lexical.indexOf(id2.name) === -1 && this.scopeStack[0].var.indexOf(id2.name) === -1) {
    this.undefinedExports[id2.name] = id2;
  }
};
pp$5.currentScope = function() {
  return this.scopeStack[this.scopeStack.length - 1];
};
pp$5.currentVarScope = function() {
  for (var i = this.scopeStack.length - 1; ; i--) {
    var scope2 = this.scopeStack[i];
    if (scope2.flags & SCOPE_VAR) {
      return scope2;
    }
  }
};
pp$5.currentThisScope = function() {
  for (var i = this.scopeStack.length - 1; ; i--) {
    var scope2 = this.scopeStack[i];
    if (scope2.flags & SCOPE_VAR && !(scope2.flags & SCOPE_ARROW)) {
      return scope2;
    }
  }
};
var Node = function Node2(parser2, pos, loc) {
  this.type = "";
  this.start = pos;
  this.end = 0;
  if (parser2.options.locations) {
    this.loc = new SourceLocation(parser2, loc);
  }
  if (parser2.options.directSourceFile) {
    this.sourceFile = parser2.options.directSourceFile;
  }
  if (parser2.options.ranges) {
    this.range = [pos, 0];
  }
};
var pp$6 = Parser.prototype;
pp$6.startNode = function() {
  return new Node(this, this.start, this.startLoc);
};
pp$6.startNodeAt = function(pos, loc) {
  return new Node(this, pos, loc);
};
function finishNodeAt(node2, type, pos, loc) {
  node2.type = type;
  node2.end = pos;
  if (this.options.locations) {
    node2.loc.end = loc;
  }
  if (this.options.ranges) {
    node2.range[1] = pos;
  }
  return node2;
}
pp$6.finishNode = function(node2, type) {
  return finishNodeAt.call(this, node2, type, this.lastTokEnd, this.lastTokEndLoc);
};
pp$6.finishNodeAt = function(node2, type, pos, loc) {
  return finishNodeAt.call(this, node2, type, pos, loc);
};
var TokContext = function TokContext2(token, isExpr, preserveSpace, override, generator) {
  this.token = token;
  this.isExpr = !!isExpr;
  this.preserveSpace = !!preserveSpace;
  this.override = override;
  this.generator = !!generator;
};
var types$1 = {
  b_stat: new TokContext("{", false),
  b_expr: new TokContext("{", true),
  b_tmpl: new TokContext("${", false),
  p_stat: new TokContext("(", false),
  p_expr: new TokContext("(", true),
  q_tmpl: new TokContext("`", true, true, function(p) {
    return p.tryReadTemplateToken();
  }),
  f_stat: new TokContext("function", false),
  f_expr: new TokContext("function", true),
  f_expr_gen: new TokContext("function", true, false, null, true),
  f_gen: new TokContext("function", false, false, null, true)
};
var pp$7 = Parser.prototype;
pp$7.initialContext = function() {
  return [types$1.b_stat];
};
pp$7.braceIsBlock = function(prevType) {
  var parent = this.curContext();
  if (parent === types$1.f_expr || parent === types$1.f_stat) {
    return true;
  }
  if (prevType === types.colon && (parent === types$1.b_stat || parent === types$1.b_expr)) {
    return !parent.isExpr;
  }
  if (prevType === types._return || prevType === types.name && this.exprAllowed) {
    return lineBreak.test(this.input.slice(this.lastTokEnd, this.start));
  }
  if (prevType === types._else || prevType === types.semi || prevType === types.eof || prevType === types.parenR || prevType === types.arrow) {
    return true;
  }
  if (prevType === types.braceL) {
    return parent === types$1.b_stat;
  }
  if (prevType === types._var || prevType === types._const || prevType === types.name) {
    return false;
  }
  return !this.exprAllowed;
};
pp$7.inGeneratorContext = function() {
  for (var i = this.context.length - 1; i >= 1; i--) {
    var context2 = this.context[i];
    if (context2.token === "function") {
      return context2.generator;
    }
  }
  return false;
};
pp$7.updateContext = function(prevType) {
  var update, type = this.type;
  if (type.keyword && prevType === types.dot) {
    this.exprAllowed = false;
  } else if (update = type.updateContext) {
    update.call(this, prevType);
  } else {
    this.exprAllowed = type.beforeExpr;
  }
};
types.parenR.updateContext = types.braceR.updateContext = function() {
  if (this.context.length === 1) {
    this.exprAllowed = true;
    return;
  }
  var out = this.context.pop();
  if (out === types$1.b_stat && this.curContext().token === "function") {
    out = this.context.pop();
  }
  this.exprAllowed = !out.isExpr;
};
types.braceL.updateContext = function(prevType) {
  this.context.push(this.braceIsBlock(prevType) ? types$1.b_stat : types$1.b_expr);
  this.exprAllowed = true;
};
types.dollarBraceL.updateContext = function() {
  this.context.push(types$1.b_tmpl);
  this.exprAllowed = true;
};
types.parenL.updateContext = function(prevType) {
  var statementParens = prevType === types._if || prevType === types._for || prevType === types._with || prevType === types._while;
  this.context.push(statementParens ? types$1.p_stat : types$1.p_expr);
  this.exprAllowed = true;
};
types.incDec.updateContext = function() {
};
types._function.updateContext = types._class.updateContext = function(prevType) {
  if (prevType.beforeExpr && prevType !== types.semi && prevType !== types._else && !(prevType === types._return && lineBreak.test(this.input.slice(this.lastTokEnd, this.start))) && !((prevType === types.colon || prevType === types.braceL) && this.curContext() === types$1.b_stat)) {
    this.context.push(types$1.f_expr);
  } else {
    this.context.push(types$1.f_stat);
  }
  this.exprAllowed = false;
};
types.backQuote.updateContext = function() {
  if (this.curContext() === types$1.q_tmpl) {
    this.context.pop();
  } else {
    this.context.push(types$1.q_tmpl);
  }
  this.exprAllowed = false;
};
types.star.updateContext = function(prevType) {
  if (prevType === types._function) {
    var index = this.context.length - 1;
    if (this.context[index] === types$1.f_expr) {
      this.context[index] = types$1.f_expr_gen;
    } else {
      this.context[index] = types$1.f_gen;
    }
  }
  this.exprAllowed = true;
};
types.name.updateContext = function(prevType) {
  var allowed = false;
  if (this.options.ecmaVersion >= 6 && prevType !== types.dot) {
    if (this.value === "of" && !this.exprAllowed || this.value === "yield" && this.inGeneratorContext()) {
      allowed = true;
    }
  }
  this.exprAllowed = allowed;
};
var ecma9BinaryProperties = "ASCII ASCII_Hex_Digit AHex Alphabetic Alpha Any Assigned Bidi_Control Bidi_C Bidi_Mirrored Bidi_M Case_Ignorable CI Cased Changes_When_Casefolded CWCF Changes_When_Casemapped CWCM Changes_When_Lowercased CWL Changes_When_NFKC_Casefolded CWKCF Changes_When_Titlecased CWT Changes_When_Uppercased CWU Dash Default_Ignorable_Code_Point DI Deprecated Dep Diacritic Dia Emoji Emoji_Component Emoji_Modifier Emoji_Modifier_Base Emoji_Presentation Extender Ext Grapheme_Base Gr_Base Grapheme_Extend Gr_Ext Hex_Digit Hex IDS_Binary_Operator IDSB IDS_Trinary_Operator IDST ID_Continue IDC ID_Start IDS Ideographic Ideo Join_Control Join_C Logical_Order_Exception LOE Lowercase Lower Math Noncharacter_Code_Point NChar Pattern_Syntax Pat_Syn Pattern_White_Space Pat_WS Quotation_Mark QMark Radical Regional_Indicator RI Sentence_Terminal STerm Soft_Dotted SD Terminal_Punctuation Term Unified_Ideograph UIdeo Uppercase Upper Variation_Selector VS White_Space space XID_Continue XIDC XID_Start XIDS";
var ecma10BinaryProperties = ecma9BinaryProperties + " Extended_Pictographic";
var ecma11BinaryProperties = ecma10BinaryProperties;
var unicodeBinaryProperties = {
  9: ecma9BinaryProperties,
  10: ecma10BinaryProperties,
  11: ecma11BinaryProperties
};
var unicodeGeneralCategoryValues = "Cased_Letter LC Close_Punctuation Pe Connector_Punctuation Pc Control Cc cntrl Currency_Symbol Sc Dash_Punctuation Pd Decimal_Number Nd digit Enclosing_Mark Me Final_Punctuation Pf Format Cf Initial_Punctuation Pi Letter L Letter_Number Nl Line_Separator Zl Lowercase_Letter Ll Mark M Combining_Mark Math_Symbol Sm Modifier_Letter Lm Modifier_Symbol Sk Nonspacing_Mark Mn Number N Open_Punctuation Ps Other C Other_Letter Lo Other_Number No Other_Punctuation Po Other_Symbol So Paragraph_Separator Zp Private_Use Co Punctuation P punct Separator Z Space_Separator Zs Spacing_Mark Mc Surrogate Cs Symbol S Titlecase_Letter Lt Unassigned Cn Uppercase_Letter Lu";
var ecma9ScriptValues = "Adlam Adlm Ahom Ahom Anatolian_Hieroglyphs Hluw Arabic Arab Armenian Armn Avestan Avst Balinese Bali Bamum Bamu Bassa_Vah Bass Batak Batk Bengali Beng Bhaiksuki Bhks Bopomofo Bopo Brahmi Brah Braille Brai Buginese Bugi Buhid Buhd Canadian_Aboriginal Cans Carian Cari Caucasian_Albanian Aghb Chakma Cakm Cham Cham Cherokee Cher Common Zyyy Coptic Copt Qaac Cuneiform Xsux Cypriot Cprt Cyrillic Cyrl Deseret Dsrt Devanagari Deva Duployan Dupl Egyptian_Hieroglyphs Egyp Elbasan Elba Ethiopic Ethi Georgian Geor Glagolitic Glag Gothic Goth Grantha Gran Greek Grek Gujarati Gujr Gurmukhi Guru Han Hani Hangul Hang Hanunoo Hano Hatran Hatr Hebrew Hebr Hiragana Hira Imperial_Aramaic Armi Inherited Zinh Qaai Inscriptional_Pahlavi Phli Inscriptional_Parthian Prti Javanese Java Kaithi Kthi Kannada Knda Katakana Kana Kayah_Li Kali Kharoshthi Khar Khmer Khmr Khojki Khoj Khudawadi Sind Lao Laoo Latin Latn Lepcha Lepc Limbu Limb Linear_A Lina Linear_B Linb Lisu Lisu Lycian Lyci Lydian Lydi Mahajani Mahj Malayalam Mlym Mandaic Mand Manichaean Mani Marchen Marc Masaram_Gondi Gonm Meetei_Mayek Mtei Mende_Kikakui Mend Meroitic_Cursive Merc Meroitic_Hieroglyphs Mero Miao Plrd Modi Modi Mongolian Mong Mro Mroo Multani Mult Myanmar Mymr Nabataean Nbat New_Tai_Lue Talu Newa Newa Nko Nkoo Nushu Nshu Ogham Ogam Ol_Chiki Olck Old_Hungarian Hung Old_Italic Ital Old_North_Arabian Narb Old_Permic Perm Old_Persian Xpeo Old_South_Arabian Sarb Old_Turkic Orkh Oriya Orya Osage Osge Osmanya Osma Pahawh_Hmong Hmng Palmyrene Palm Pau_Cin_Hau Pauc Phags_Pa Phag Phoenician Phnx Psalter_Pahlavi Phlp Rejang Rjng Runic Runr Samaritan Samr Saurashtra Saur Sharada Shrd Shavian Shaw Siddham Sidd SignWriting Sgnw Sinhala Sinh Sora_Sompeng Sora Soyombo Soyo Sundanese Sund Syloti_Nagri Sylo Syriac Syrc Tagalog Tglg Tagbanwa Tagb Tai_Le Tale Tai_Tham Lana Tai_Viet Tavt Takri Takr Tamil Taml Tangut Tang Telugu Telu Thaana Thaa Thai Thai Tibetan Tibt Tifinagh Tfng Tirhuta Tirh Ugaritic Ugar Vai Vaii Warang_Citi Wara Yi Yiii Zanabazar_Square Zanb";
var ecma10ScriptValues = ecma9ScriptValues + " Dogra Dogr Gunjala_Gondi Gong Hanifi_Rohingya Rohg Makasar Maka Medefaidrin Medf Old_Sogdian Sogo Sogdian Sogd";
var ecma11ScriptValues = ecma10ScriptValues + " Elymaic Elym Nandinagari Nand Nyiakeng_Puachue_Hmong Hmnp Wancho Wcho";
var unicodeScriptValues = {
  9: ecma9ScriptValues,
  10: ecma10ScriptValues,
  11: ecma11ScriptValues
};
var data = {};
function buildUnicodeData(ecmaVersion) {
  var d = data[ecmaVersion] = {
    binary: wordsRegexp(unicodeBinaryProperties[ecmaVersion] + " " + unicodeGeneralCategoryValues),
    nonBinary: {
      General_Category: wordsRegexp(unicodeGeneralCategoryValues),
      Script: wordsRegexp(unicodeScriptValues[ecmaVersion])
    }
  };
  d.nonBinary.Script_Extensions = d.nonBinary.Script;
  d.nonBinary.gc = d.nonBinary.General_Category;
  d.nonBinary.sc = d.nonBinary.Script;
  d.nonBinary.scx = d.nonBinary.Script_Extensions;
}
buildUnicodeData(9);
buildUnicodeData(10);
buildUnicodeData(11);
var pp$8 = Parser.prototype;
var RegExpValidationState = function RegExpValidationState2(parser2) {
  this.parser = parser2;
  this.validFlags = "gim" + (parser2.options.ecmaVersion >= 6 ? "uy" : "") + (parser2.options.ecmaVersion >= 9 ? "s" : "");
  this.unicodeProperties = data[parser2.options.ecmaVersion >= 11 ? 11 : parser2.options.ecmaVersion];
  this.source = "";
  this.flags = "";
  this.start = 0;
  this.switchU = false;
  this.switchN = false;
  this.pos = 0;
  this.lastIntValue = 0;
  this.lastStringValue = "";
  this.lastAssertionIsQuantifiable = false;
  this.numCapturingParens = 0;
  this.maxBackReference = 0;
  this.groupNames = [];
  this.backReferenceNames = [];
};
RegExpValidationState.prototype.reset = function reset(start, pattern, flags) {
  var unicode = flags.indexOf("u") !== -1;
  this.start = start | 0;
  this.source = pattern + "";
  this.flags = flags;
  this.switchU = unicode && this.parser.options.ecmaVersion >= 6;
  this.switchN = unicode && this.parser.options.ecmaVersion >= 9;
};
RegExpValidationState.prototype.raise = function raise(message) {
  this.parser.raiseRecoverable(this.start, "Invalid regular expression: /" + this.source + "/: " + message);
};
RegExpValidationState.prototype.at = function at(i, forceU) {
  if (forceU === void 0)
    forceU = false;
  var s = this.source;
  var l = s.length;
  if (i >= l) {
    return -1;
  }
  var c2 = s.charCodeAt(i);
  if (!(forceU || this.switchU) || c2 <= 55295 || c2 >= 57344 || i + 1 >= l) {
    return c2;
  }
  var next = s.charCodeAt(i + 1);
  return next >= 56320 && next <= 57343 ? (c2 << 10) + next - 56613888 : c2;
};
RegExpValidationState.prototype.nextIndex = function nextIndex(i, forceU) {
  if (forceU === void 0)
    forceU = false;
  var s = this.source;
  var l = s.length;
  if (i >= l) {
    return l;
  }
  var c2 = s.charCodeAt(i), next;
  if (!(forceU || this.switchU) || c2 <= 55295 || c2 >= 57344 || i + 1 >= l || (next = s.charCodeAt(i + 1)) < 56320 || next > 57343) {
    return i + 1;
  }
  return i + 2;
};
RegExpValidationState.prototype.current = function current(forceU) {
  if (forceU === void 0)
    forceU = false;
  return this.at(this.pos, forceU);
};
RegExpValidationState.prototype.lookahead = function lookahead(forceU) {
  if (forceU === void 0)
    forceU = false;
  return this.at(this.nextIndex(this.pos, forceU), forceU);
};
RegExpValidationState.prototype.advance = function advance(forceU) {
  if (forceU === void 0)
    forceU = false;
  this.pos = this.nextIndex(this.pos, forceU);
};
RegExpValidationState.prototype.eat = function eat(ch, forceU) {
  if (forceU === void 0)
    forceU = false;
  if (this.current(forceU) === ch) {
    this.advance(forceU);
    return true;
  }
  return false;
};
function codePointToString(ch) {
  if (ch <= 65535) {
    return String.fromCharCode(ch);
  }
  ch -= 65536;
  return String.fromCharCode((ch >> 10) + 55296, (ch & 1023) + 56320);
}
pp$8.validateRegExpFlags = function(state) {
  var validFlags = state.validFlags;
  var flags = state.flags;
  for (var i = 0; i < flags.length; i++) {
    var flag = flags.charAt(i);
    if (validFlags.indexOf(flag) === -1) {
      this.raise(state.start, "Invalid regular expression flag");
    }
    if (flags.indexOf(flag, i + 1) > -1) {
      this.raise(state.start, "Duplicate regular expression flag");
    }
  }
};
pp$8.validateRegExpPattern = function(state) {
  this.regexp_pattern(state);
  if (!state.switchN && this.options.ecmaVersion >= 9 && state.groupNames.length > 0) {
    state.switchN = true;
    this.regexp_pattern(state);
  }
};
pp$8.regexp_pattern = function(state) {
  state.pos = 0;
  state.lastIntValue = 0;
  state.lastStringValue = "";
  state.lastAssertionIsQuantifiable = false;
  state.numCapturingParens = 0;
  state.maxBackReference = 0;
  state.groupNames.length = 0;
  state.backReferenceNames.length = 0;
  this.regexp_disjunction(state);
  if (state.pos !== state.source.length) {
    if (state.eat(41)) {
      state.raise("Unmatched ')'");
    }
    if (state.eat(93) || state.eat(125)) {
      state.raise("Lone quantifier brackets");
    }
  }
  if (state.maxBackReference > state.numCapturingParens) {
    state.raise("Invalid escape");
  }
  for (var i = 0, list2 = state.backReferenceNames; i < list2.length; i += 1) {
    var name = list2[i];
    if (state.groupNames.indexOf(name) === -1) {
      state.raise("Invalid named capture referenced");
    }
  }
};
pp$8.regexp_disjunction = function(state) {
  this.regexp_alternative(state);
  while (state.eat(124)) {
    this.regexp_alternative(state);
  }
  if (this.regexp_eatQuantifier(state, true)) {
    state.raise("Nothing to repeat");
  }
  if (state.eat(123)) {
    state.raise("Lone quantifier brackets");
  }
};
pp$8.regexp_alternative = function(state) {
  while (state.pos < state.source.length && this.regexp_eatTerm(state)) {
  }
};
pp$8.regexp_eatTerm = function(state) {
  if (this.regexp_eatAssertion(state)) {
    if (state.lastAssertionIsQuantifiable && this.regexp_eatQuantifier(state)) {
      if (state.switchU) {
        state.raise("Invalid quantifier");
      }
    }
    return true;
  }
  if (state.switchU ? this.regexp_eatAtom(state) : this.regexp_eatExtendedAtom(state)) {
    this.regexp_eatQuantifier(state);
    return true;
  }
  return false;
};
pp$8.regexp_eatAssertion = function(state) {
  var start = state.pos;
  state.lastAssertionIsQuantifiable = false;
  if (state.eat(94) || state.eat(36)) {
    return true;
  }
  if (state.eat(92)) {
    if (state.eat(66) || state.eat(98)) {
      return true;
    }
    state.pos = start;
  }
  if (state.eat(40) && state.eat(63)) {
    var lookbehind = false;
    if (this.options.ecmaVersion >= 9) {
      lookbehind = state.eat(60);
    }
    if (state.eat(61) || state.eat(33)) {
      this.regexp_disjunction(state);
      if (!state.eat(41)) {
        state.raise("Unterminated group");
      }
      state.lastAssertionIsQuantifiable = !lookbehind;
      return true;
    }
  }
  state.pos = start;
  return false;
};
pp$8.regexp_eatQuantifier = function(state, noError) {
  if (noError === void 0)
    noError = false;
  if (this.regexp_eatQuantifierPrefix(state, noError)) {
    state.eat(63);
    return true;
  }
  return false;
};
pp$8.regexp_eatQuantifierPrefix = function(state, noError) {
  return state.eat(42) || state.eat(43) || state.eat(63) || this.regexp_eatBracedQuantifier(state, noError);
};
pp$8.regexp_eatBracedQuantifier = function(state, noError) {
  var start = state.pos;
  if (state.eat(123)) {
    var min = 0, max = -1;
    if (this.regexp_eatDecimalDigits(state)) {
      min = state.lastIntValue;
      if (state.eat(44) && this.regexp_eatDecimalDigits(state)) {
        max = state.lastIntValue;
      }
      if (state.eat(125)) {
        if (max !== -1 && max < min && !noError) {
          state.raise("numbers out of order in {} quantifier");
        }
        return true;
      }
    }
    if (state.switchU && !noError) {
      state.raise("Incomplete quantifier");
    }
    state.pos = start;
  }
  return false;
};
pp$8.regexp_eatAtom = function(state) {
  return this.regexp_eatPatternCharacters(state) || state.eat(46) || this.regexp_eatReverseSolidusAtomEscape(state) || this.regexp_eatCharacterClass(state) || this.regexp_eatUncapturingGroup(state) || this.regexp_eatCapturingGroup(state);
};
pp$8.regexp_eatReverseSolidusAtomEscape = function(state) {
  var start = state.pos;
  if (state.eat(92)) {
    if (this.regexp_eatAtomEscape(state)) {
      return true;
    }
    state.pos = start;
  }
  return false;
};
pp$8.regexp_eatUncapturingGroup = function(state) {
  var start = state.pos;
  if (state.eat(40)) {
    if (state.eat(63) && state.eat(58)) {
      this.regexp_disjunction(state);
      if (state.eat(41)) {
        return true;
      }
      state.raise("Unterminated group");
    }
    state.pos = start;
  }
  return false;
};
pp$8.regexp_eatCapturingGroup = function(state) {
  if (state.eat(40)) {
    if (this.options.ecmaVersion >= 9) {
      this.regexp_groupSpecifier(state);
    } else if (state.current() === 63) {
      state.raise("Invalid group");
    }
    this.regexp_disjunction(state);
    if (state.eat(41)) {
      state.numCapturingParens += 1;
      return true;
    }
    state.raise("Unterminated group");
  }
  return false;
};
pp$8.regexp_eatExtendedAtom = function(state) {
  return state.eat(46) || this.regexp_eatReverseSolidusAtomEscape(state) || this.regexp_eatCharacterClass(state) || this.regexp_eatUncapturingGroup(state) || this.regexp_eatCapturingGroup(state) || this.regexp_eatInvalidBracedQuantifier(state) || this.regexp_eatExtendedPatternCharacter(state);
};
pp$8.regexp_eatInvalidBracedQuantifier = function(state) {
  if (this.regexp_eatBracedQuantifier(state, true)) {
    state.raise("Nothing to repeat");
  }
  return false;
};
pp$8.regexp_eatSyntaxCharacter = function(state) {
  var ch = state.current();
  if (isSyntaxCharacter(ch)) {
    state.lastIntValue = ch;
    state.advance();
    return true;
  }
  return false;
};
function isSyntaxCharacter(ch) {
  return ch === 36 || ch >= 40 && ch <= 43 || ch === 46 || ch === 63 || ch >= 91 && ch <= 94 || ch >= 123 && ch <= 125;
}
pp$8.regexp_eatPatternCharacters = function(state) {
  var start = state.pos;
  var ch = 0;
  while ((ch = state.current()) !== -1 && !isSyntaxCharacter(ch)) {
    state.advance();
  }
  return state.pos !== start;
};
pp$8.regexp_eatExtendedPatternCharacter = function(state) {
  var ch = state.current();
  if (ch !== -1 && ch !== 36 && !(ch >= 40 && ch <= 43) && ch !== 46 && ch !== 63 && ch !== 91 && ch !== 94 && ch !== 124) {
    state.advance();
    return true;
  }
  return false;
};
pp$8.regexp_groupSpecifier = function(state) {
  if (state.eat(63)) {
    if (this.regexp_eatGroupName(state)) {
      if (state.groupNames.indexOf(state.lastStringValue) !== -1) {
        state.raise("Duplicate capture group name");
      }
      state.groupNames.push(state.lastStringValue);
      return;
    }
    state.raise("Invalid group");
  }
};
pp$8.regexp_eatGroupName = function(state) {
  state.lastStringValue = "";
  if (state.eat(60)) {
    if (this.regexp_eatRegExpIdentifierName(state) && state.eat(62)) {
      return true;
    }
    state.raise("Invalid capture group name");
  }
  return false;
};
pp$8.regexp_eatRegExpIdentifierName = function(state) {
  state.lastStringValue = "";
  if (this.regexp_eatRegExpIdentifierStart(state)) {
    state.lastStringValue += codePointToString(state.lastIntValue);
    while (this.regexp_eatRegExpIdentifierPart(state)) {
      state.lastStringValue += codePointToString(state.lastIntValue);
    }
    return true;
  }
  return false;
};
pp$8.regexp_eatRegExpIdentifierStart = function(state) {
  var start = state.pos;
  var forceU = this.options.ecmaVersion >= 11;
  var ch = state.current(forceU);
  state.advance(forceU);
  if (ch === 92 && this.regexp_eatRegExpUnicodeEscapeSequence(state, forceU)) {
    ch = state.lastIntValue;
  }
  if (isRegExpIdentifierStart(ch)) {
    state.lastIntValue = ch;
    return true;
  }
  state.pos = start;
  return false;
};
function isRegExpIdentifierStart(ch) {
  return isIdentifierStart(ch, true) || ch === 36 || ch === 95;
}
pp$8.regexp_eatRegExpIdentifierPart = function(state) {
  var start = state.pos;
  var forceU = this.options.ecmaVersion >= 11;
  var ch = state.current(forceU);
  state.advance(forceU);
  if (ch === 92 && this.regexp_eatRegExpUnicodeEscapeSequence(state, forceU)) {
    ch = state.lastIntValue;
  }
  if (isRegExpIdentifierPart(ch)) {
    state.lastIntValue = ch;
    return true;
  }
  state.pos = start;
  return false;
};
function isRegExpIdentifierPart(ch) {
  return isIdentifierChar(ch, true) || ch === 36 || ch === 95 || ch === 8204 || ch === 8205;
}
pp$8.regexp_eatAtomEscape = function(state) {
  if (this.regexp_eatBackReference(state) || this.regexp_eatCharacterClassEscape(state) || this.regexp_eatCharacterEscape(state) || state.switchN && this.regexp_eatKGroupName(state)) {
    return true;
  }
  if (state.switchU) {
    if (state.current() === 99) {
      state.raise("Invalid unicode escape");
    }
    state.raise("Invalid escape");
  }
  return false;
};
pp$8.regexp_eatBackReference = function(state) {
  var start = state.pos;
  if (this.regexp_eatDecimalEscape(state)) {
    var n2 = state.lastIntValue;
    if (state.switchU) {
      if (n2 > state.maxBackReference) {
        state.maxBackReference = n2;
      }
      return true;
    }
    if (n2 <= state.numCapturingParens) {
      return true;
    }
    state.pos = start;
  }
  return false;
};
pp$8.regexp_eatKGroupName = function(state) {
  if (state.eat(107)) {
    if (this.regexp_eatGroupName(state)) {
      state.backReferenceNames.push(state.lastStringValue);
      return true;
    }
    state.raise("Invalid named reference");
  }
  return false;
};
pp$8.regexp_eatCharacterEscape = function(state) {
  return this.regexp_eatControlEscape(state) || this.regexp_eatCControlLetter(state) || this.regexp_eatZero(state) || this.regexp_eatHexEscapeSequence(state) || this.regexp_eatRegExpUnicodeEscapeSequence(state, false) || !state.switchU && this.regexp_eatLegacyOctalEscapeSequence(state) || this.regexp_eatIdentityEscape(state);
};
pp$8.regexp_eatCControlLetter = function(state) {
  var start = state.pos;
  if (state.eat(99)) {
    if (this.regexp_eatControlLetter(state)) {
      return true;
    }
    state.pos = start;
  }
  return false;
};
pp$8.regexp_eatZero = function(state) {
  if (state.current() === 48 && !isDecimalDigit(state.lookahead())) {
    state.lastIntValue = 0;
    state.advance();
    return true;
  }
  return false;
};
pp$8.regexp_eatControlEscape = function(state) {
  var ch = state.current();
  if (ch === 116) {
    state.lastIntValue = 9;
    state.advance();
    return true;
  }
  if (ch === 110) {
    state.lastIntValue = 10;
    state.advance();
    return true;
  }
  if (ch === 118) {
    state.lastIntValue = 11;
    state.advance();
    return true;
  }
  if (ch === 102) {
    state.lastIntValue = 12;
    state.advance();
    return true;
  }
  if (ch === 114) {
    state.lastIntValue = 13;
    state.advance();
    return true;
  }
  return false;
};
pp$8.regexp_eatControlLetter = function(state) {
  var ch = state.current();
  if (isControlLetter(ch)) {
    state.lastIntValue = ch % 32;
    state.advance();
    return true;
  }
  return false;
};
function isControlLetter(ch) {
  return ch >= 65 && ch <= 90 || ch >= 97 && ch <= 122;
}
pp$8.regexp_eatRegExpUnicodeEscapeSequence = function(state, forceU) {
  if (forceU === void 0)
    forceU = false;
  var start = state.pos;
  var switchU = forceU || state.switchU;
  if (state.eat(117)) {
    if (this.regexp_eatFixedHexDigits(state, 4)) {
      var lead = state.lastIntValue;
      if (switchU && lead >= 55296 && lead <= 56319) {
        var leadSurrogateEnd = state.pos;
        if (state.eat(92) && state.eat(117) && this.regexp_eatFixedHexDigits(state, 4)) {
          var trail = state.lastIntValue;
          if (trail >= 56320 && trail <= 57343) {
            state.lastIntValue = (lead - 55296) * 1024 + (trail - 56320) + 65536;
            return true;
          }
        }
        state.pos = leadSurrogateEnd;
        state.lastIntValue = lead;
      }
      return true;
    }
    if (switchU && state.eat(123) && this.regexp_eatHexDigits(state) && state.eat(125) && isValidUnicode(state.lastIntValue)) {
      return true;
    }
    if (switchU) {
      state.raise("Invalid unicode escape");
    }
    state.pos = start;
  }
  return false;
};
function isValidUnicode(ch) {
  return ch >= 0 && ch <= 1114111;
}
pp$8.regexp_eatIdentityEscape = function(state) {
  if (state.switchU) {
    if (this.regexp_eatSyntaxCharacter(state)) {
      return true;
    }
    if (state.eat(47)) {
      state.lastIntValue = 47;
      return true;
    }
    return false;
  }
  var ch = state.current();
  if (ch !== 99 && (!state.switchN || ch !== 107)) {
    state.lastIntValue = ch;
    state.advance();
    return true;
  }
  return false;
};
pp$8.regexp_eatDecimalEscape = function(state) {
  state.lastIntValue = 0;
  var ch = state.current();
  if (ch >= 49 && ch <= 57) {
    do {
      state.lastIntValue = 10 * state.lastIntValue + (ch - 48);
      state.advance();
    } while ((ch = state.current()) >= 48 && ch <= 57);
    return true;
  }
  return false;
};
pp$8.regexp_eatCharacterClassEscape = function(state) {
  var ch = state.current();
  if (isCharacterClassEscape(ch)) {
    state.lastIntValue = -1;
    state.advance();
    return true;
  }
  if (state.switchU && this.options.ecmaVersion >= 9 && (ch === 80 || ch === 112)) {
    state.lastIntValue = -1;
    state.advance();
    if (state.eat(123) && this.regexp_eatUnicodePropertyValueExpression(state) && state.eat(125)) {
      return true;
    }
    state.raise("Invalid property name");
  }
  return false;
};
function isCharacterClassEscape(ch) {
  return ch === 100 || ch === 68 || ch === 115 || ch === 83 || ch === 119 || ch === 87;
}
pp$8.regexp_eatUnicodePropertyValueExpression = function(state) {
  var start = state.pos;
  if (this.regexp_eatUnicodePropertyName(state) && state.eat(61)) {
    var name = state.lastStringValue;
    if (this.regexp_eatUnicodePropertyValue(state)) {
      var value2 = state.lastStringValue;
      this.regexp_validateUnicodePropertyNameAndValue(state, name, value2);
      return true;
    }
  }
  state.pos = start;
  if (this.regexp_eatLoneUnicodePropertyNameOrValue(state)) {
    var nameOrValue = state.lastStringValue;
    this.regexp_validateUnicodePropertyNameOrValue(state, nameOrValue);
    return true;
  }
  return false;
};
pp$8.regexp_validateUnicodePropertyNameAndValue = function(state, name, value2) {
  if (!has(state.unicodeProperties.nonBinary, name)) {
    state.raise("Invalid property name");
  }
  if (!state.unicodeProperties.nonBinary[name].test(value2)) {
    state.raise("Invalid property value");
  }
};
pp$8.regexp_validateUnicodePropertyNameOrValue = function(state, nameOrValue) {
  if (!state.unicodeProperties.binary.test(nameOrValue)) {
    state.raise("Invalid property name");
  }
};
pp$8.regexp_eatUnicodePropertyName = function(state) {
  var ch = 0;
  state.lastStringValue = "";
  while (isUnicodePropertyNameCharacter(ch = state.current())) {
    state.lastStringValue += codePointToString(ch);
    state.advance();
  }
  return state.lastStringValue !== "";
};
function isUnicodePropertyNameCharacter(ch) {
  return isControlLetter(ch) || ch === 95;
}
pp$8.regexp_eatUnicodePropertyValue = function(state) {
  var ch = 0;
  state.lastStringValue = "";
  while (isUnicodePropertyValueCharacter(ch = state.current())) {
    state.lastStringValue += codePointToString(ch);
    state.advance();
  }
  return state.lastStringValue !== "";
};
function isUnicodePropertyValueCharacter(ch) {
  return isUnicodePropertyNameCharacter(ch) || isDecimalDigit(ch);
}
pp$8.regexp_eatLoneUnicodePropertyNameOrValue = function(state) {
  return this.regexp_eatUnicodePropertyValue(state);
};
pp$8.regexp_eatCharacterClass = function(state) {
  if (state.eat(91)) {
    state.eat(94);
    this.regexp_classRanges(state);
    if (state.eat(93)) {
      return true;
    }
    state.raise("Unterminated character class");
  }
  return false;
};
pp$8.regexp_classRanges = function(state) {
  while (this.regexp_eatClassAtom(state)) {
    var left = state.lastIntValue;
    if (state.eat(45) && this.regexp_eatClassAtom(state)) {
      var right = state.lastIntValue;
      if (state.switchU && (left === -1 || right === -1)) {
        state.raise("Invalid character class");
      }
      if (left !== -1 && right !== -1 && left > right) {
        state.raise("Range out of order in character class");
      }
    }
  }
};
pp$8.regexp_eatClassAtom = function(state) {
  var start = state.pos;
  if (state.eat(92)) {
    if (this.regexp_eatClassEscape(state)) {
      return true;
    }
    if (state.switchU) {
      var ch$1 = state.current();
      if (ch$1 === 99 || isOctalDigit(ch$1)) {
        state.raise("Invalid class escape");
      }
      state.raise("Invalid escape");
    }
    state.pos = start;
  }
  var ch = state.current();
  if (ch !== 93) {
    state.lastIntValue = ch;
    state.advance();
    return true;
  }
  return false;
};
pp$8.regexp_eatClassEscape = function(state) {
  var start = state.pos;
  if (state.eat(98)) {
    state.lastIntValue = 8;
    return true;
  }
  if (state.switchU && state.eat(45)) {
    state.lastIntValue = 45;
    return true;
  }
  if (!state.switchU && state.eat(99)) {
    if (this.regexp_eatClassControlLetter(state)) {
      return true;
    }
    state.pos = start;
  }
  return this.regexp_eatCharacterClassEscape(state) || this.regexp_eatCharacterEscape(state);
};
pp$8.regexp_eatClassControlLetter = function(state) {
  var ch = state.current();
  if (isDecimalDigit(ch) || ch === 95) {
    state.lastIntValue = ch % 32;
    state.advance();
    return true;
  }
  return false;
};
pp$8.regexp_eatHexEscapeSequence = function(state) {
  var start = state.pos;
  if (state.eat(120)) {
    if (this.regexp_eatFixedHexDigits(state, 2)) {
      return true;
    }
    if (state.switchU) {
      state.raise("Invalid escape");
    }
    state.pos = start;
  }
  return false;
};
pp$8.regexp_eatDecimalDigits = function(state) {
  var start = state.pos;
  var ch = 0;
  state.lastIntValue = 0;
  while (isDecimalDigit(ch = state.current())) {
    state.lastIntValue = 10 * state.lastIntValue + (ch - 48);
    state.advance();
  }
  return state.pos !== start;
};
function isDecimalDigit(ch) {
  return ch >= 48 && ch <= 57;
}
pp$8.regexp_eatHexDigits = function(state) {
  var start = state.pos;
  var ch = 0;
  state.lastIntValue = 0;
  while (isHexDigit(ch = state.current())) {
    state.lastIntValue = 16 * state.lastIntValue + hexToInt(ch);
    state.advance();
  }
  return state.pos !== start;
};
function isHexDigit(ch) {
  return ch >= 48 && ch <= 57 || ch >= 65 && ch <= 70 || ch >= 97 && ch <= 102;
}
function hexToInt(ch) {
  if (ch >= 65 && ch <= 70) {
    return 10 + (ch - 65);
  }
  if (ch >= 97 && ch <= 102) {
    return 10 + (ch - 97);
  }
  return ch - 48;
}
pp$8.regexp_eatLegacyOctalEscapeSequence = function(state) {
  if (this.regexp_eatOctalDigit(state)) {
    var n1 = state.lastIntValue;
    if (this.regexp_eatOctalDigit(state)) {
      var n2 = state.lastIntValue;
      if (n1 <= 3 && this.regexp_eatOctalDigit(state)) {
        state.lastIntValue = n1 * 64 + n2 * 8 + state.lastIntValue;
      } else {
        state.lastIntValue = n1 * 8 + n2;
      }
    } else {
      state.lastIntValue = n1;
    }
    return true;
  }
  return false;
};
pp$8.regexp_eatOctalDigit = function(state) {
  var ch = state.current();
  if (isOctalDigit(ch)) {
    state.lastIntValue = ch - 48;
    state.advance();
    return true;
  }
  state.lastIntValue = 0;
  return false;
};
function isOctalDigit(ch) {
  return ch >= 48 && ch <= 55;
}
pp$8.regexp_eatFixedHexDigits = function(state, length2) {
  var start = state.pos;
  state.lastIntValue = 0;
  for (var i = 0; i < length2; ++i) {
    var ch = state.current();
    if (!isHexDigit(ch)) {
      state.pos = start;
      return false;
    }
    state.lastIntValue = 16 * state.lastIntValue + hexToInt(ch);
    state.advance();
  }
  return true;
};
var Token = function Token2(p) {
  this.type = p.type;
  this.value = p.value;
  this.start = p.start;
  this.end = p.end;
  if (p.options.locations) {
    this.loc = new SourceLocation(p, p.startLoc, p.endLoc);
  }
  if (p.options.ranges) {
    this.range = [p.start, p.end];
  }
};
var pp$9 = Parser.prototype;
pp$9.next = function(ignoreEscapeSequenceInKeyword) {
  if (!ignoreEscapeSequenceInKeyword && this.type.keyword && this.containsEsc) {
    this.raiseRecoverable(this.start, "Escape sequence in keyword " + this.type.keyword);
  }
  if (this.options.onToken) {
    this.options.onToken(new Token(this));
  }
  this.lastTokEnd = this.end;
  this.lastTokStart = this.start;
  this.lastTokEndLoc = this.endLoc;
  this.lastTokStartLoc = this.startLoc;
  this.nextToken();
};
pp$9.getToken = function() {
  this.next();
  return new Token(this);
};
if (typeof Symbol !== "undefined") {
  pp$9[Symbol.iterator] = function() {
    var this$1 = this;
    return {
      next: function() {
        var token = this$1.getToken();
        return {
          done: token.type === types.eof,
          value: token
        };
      }
    };
  };
}
pp$9.curContext = function() {
  return this.context[this.context.length - 1];
};
pp$9.nextToken = function() {
  var curContext = this.curContext();
  if (!curContext || !curContext.preserveSpace) {
    this.skipSpace();
  }
  this.start = this.pos;
  if (this.options.locations) {
    this.startLoc = this.curPosition();
  }
  if (this.pos >= this.input.length) {
    return this.finishToken(types.eof);
  }
  if (curContext.override) {
    return curContext.override(this);
  } else {
    this.readToken(this.fullCharCodeAtPos());
  }
};
pp$9.readToken = function(code) {
  if (isIdentifierStart(code, this.options.ecmaVersion >= 6) || code === 92) {
    return this.readWord();
  }
  return this.getTokenFromCode(code);
};
pp$9.fullCharCodeAtPos = function() {
  var code = this.input.charCodeAt(this.pos);
  if (code <= 55295 || code >= 57344) {
    return code;
  }
  var next = this.input.charCodeAt(this.pos + 1);
  return (code << 10) + next - 56613888;
};
pp$9.skipBlockComment = function() {
  var startLoc = this.options.onComment && this.curPosition();
  var start = this.pos, end = this.input.indexOf("*/", this.pos += 2);
  if (end === -1) {
    this.raise(this.pos - 2, "Unterminated comment");
  }
  this.pos = end + 2;
  if (this.options.locations) {
    lineBreakG.lastIndex = start;
    var match;
    while ((match = lineBreakG.exec(this.input)) && match.index < this.pos) {
      ++this.curLine;
      this.lineStart = match.index + match[0].length;
    }
  }
  if (this.options.onComment) {
    this.options.onComment(true, this.input.slice(start + 2, end), start, this.pos, startLoc, this.curPosition());
  }
};
pp$9.skipLineComment = function(startSkip) {
  var start = this.pos;
  var startLoc = this.options.onComment && this.curPosition();
  var ch = this.input.charCodeAt(this.pos += startSkip);
  while (this.pos < this.input.length && !isNewLine(ch)) {
    ch = this.input.charCodeAt(++this.pos);
  }
  if (this.options.onComment) {
    this.options.onComment(false, this.input.slice(start + startSkip, this.pos), start, this.pos, startLoc, this.curPosition());
  }
};
pp$9.skipSpace = function() {
  loop:
    while (this.pos < this.input.length) {
      var ch = this.input.charCodeAt(this.pos);
      switch (ch) {
        case 32:
        case 160:
          ++this.pos;
          break;
        case 13:
          if (this.input.charCodeAt(this.pos + 1) === 10) {
            ++this.pos;
          }
        case 10:
        case 8232:
        case 8233:
          ++this.pos;
          if (this.options.locations) {
            ++this.curLine;
            this.lineStart = this.pos;
          }
          break;
        case 47:
          switch (this.input.charCodeAt(this.pos + 1)) {
            case 42:
              this.skipBlockComment();
              break;
            case 47:
              this.skipLineComment(2);
              break;
            default:
              break loop;
          }
          break;
        default:
          if (ch > 8 && ch < 14 || ch >= 5760 && nonASCIIwhitespace.test(String.fromCharCode(ch))) {
            ++this.pos;
          } else {
            break loop;
          }
      }
    }
};
pp$9.finishToken = function(type, val) {
  this.end = this.pos;
  if (this.options.locations) {
    this.endLoc = this.curPosition();
  }
  var prevType = this.type;
  this.type = type;
  this.value = val;
  this.updateContext(prevType);
};
pp$9.readToken_dot = function() {
  var next = this.input.charCodeAt(this.pos + 1);
  if (next >= 48 && next <= 57) {
    return this.readNumber(true);
  }
  var next2 = this.input.charCodeAt(this.pos + 2);
  if (this.options.ecmaVersion >= 6 && next === 46 && next2 === 46) {
    this.pos += 3;
    return this.finishToken(types.ellipsis);
  } else {
    ++this.pos;
    return this.finishToken(types.dot);
  }
};
pp$9.readToken_slash = function() {
  var next = this.input.charCodeAt(this.pos + 1);
  if (this.exprAllowed) {
    ++this.pos;
    return this.readRegexp();
  }
  if (next === 61) {
    return this.finishOp(types.assign, 2);
  }
  return this.finishOp(types.slash, 1);
};
pp$9.readToken_mult_modulo_exp = function(code) {
  var next = this.input.charCodeAt(this.pos + 1);
  var size = 1;
  var tokentype = code === 42 ? types.star : types.modulo;
  if (this.options.ecmaVersion >= 7 && code === 42 && next === 42) {
    ++size;
    tokentype = types.starstar;
    next = this.input.charCodeAt(this.pos + 2);
  }
  if (next === 61) {
    return this.finishOp(types.assign, size + 1);
  }
  return this.finishOp(tokentype, size);
};
pp$9.readToken_pipe_amp = function(code) {
  var next = this.input.charCodeAt(this.pos + 1);
  if (next === code) {
    if (this.options.ecmaVersion >= 12) {
      var next2 = this.input.charCodeAt(this.pos + 2);
      if (next2 === 61) {
        return this.finishOp(types.assign, 3);
      }
    }
    return this.finishOp(code === 124 ? types.logicalOR : types.logicalAND, 2);
  }
  if (next === 61) {
    return this.finishOp(types.assign, 2);
  }
  return this.finishOp(code === 124 ? types.bitwiseOR : types.bitwiseAND, 1);
};
pp$9.readToken_caret = function() {
  var next = this.input.charCodeAt(this.pos + 1);
  if (next === 61) {
    return this.finishOp(types.assign, 2);
  }
  return this.finishOp(types.bitwiseXOR, 1);
};
pp$9.readToken_plus_min = function(code) {
  var next = this.input.charCodeAt(this.pos + 1);
  if (next === code) {
    if (next === 45 && !this.inModule && this.input.charCodeAt(this.pos + 2) === 62 && (this.lastTokEnd === 0 || lineBreak.test(this.input.slice(this.lastTokEnd, this.pos)))) {
      this.skipLineComment(3);
      this.skipSpace();
      return this.nextToken();
    }
    return this.finishOp(types.incDec, 2);
  }
  if (next === 61) {
    return this.finishOp(types.assign, 2);
  }
  return this.finishOp(types.plusMin, 1);
};
pp$9.readToken_lt_gt = function(code) {
  var next = this.input.charCodeAt(this.pos + 1);
  var size = 1;
  if (next === code) {
    size = code === 62 && this.input.charCodeAt(this.pos + 2) === 62 ? 3 : 2;
    if (this.input.charCodeAt(this.pos + size) === 61) {
      return this.finishOp(types.assign, size + 1);
    }
    return this.finishOp(types.bitShift, size);
  }
  if (next === 33 && code === 60 && !this.inModule && this.input.charCodeAt(this.pos + 2) === 45 && this.input.charCodeAt(this.pos + 3) === 45) {
    this.skipLineComment(4);
    this.skipSpace();
    return this.nextToken();
  }
  if (next === 61) {
    size = 2;
  }
  return this.finishOp(types.relational, size);
};
pp$9.readToken_eq_excl = function(code) {
  var next = this.input.charCodeAt(this.pos + 1);
  if (next === 61) {
    return this.finishOp(types.equality, this.input.charCodeAt(this.pos + 2) === 61 ? 3 : 2);
  }
  if (code === 61 && next === 62 && this.options.ecmaVersion >= 6) {
    this.pos += 2;
    return this.finishToken(types.arrow);
  }
  return this.finishOp(code === 61 ? types.eq : types.prefix, 1);
};
pp$9.readToken_question = function() {
  var ecmaVersion = this.options.ecmaVersion;
  if (ecmaVersion >= 11) {
    var next = this.input.charCodeAt(this.pos + 1);
    if (next === 46) {
      var next2 = this.input.charCodeAt(this.pos + 2);
      if (next2 < 48 || next2 > 57) {
        return this.finishOp(types.questionDot, 2);
      }
    }
    if (next === 63) {
      if (ecmaVersion >= 12) {
        var next2$1 = this.input.charCodeAt(this.pos + 2);
        if (next2$1 === 61) {
          return this.finishOp(types.assign, 3);
        }
      }
      return this.finishOp(types.coalesce, 2);
    }
  }
  return this.finishOp(types.question, 1);
};
pp$9.getTokenFromCode = function(code) {
  switch (code) {
    case 46:
      return this.readToken_dot();
    case 40:
      ++this.pos;
      return this.finishToken(types.parenL);
    case 41:
      ++this.pos;
      return this.finishToken(types.parenR);
    case 59:
      ++this.pos;
      return this.finishToken(types.semi);
    case 44:
      ++this.pos;
      return this.finishToken(types.comma);
    case 91:
      ++this.pos;
      return this.finishToken(types.bracketL);
    case 93:
      ++this.pos;
      return this.finishToken(types.bracketR);
    case 123:
      ++this.pos;
      return this.finishToken(types.braceL);
    case 125:
      ++this.pos;
      return this.finishToken(types.braceR);
    case 58:
      ++this.pos;
      return this.finishToken(types.colon);
    case 96:
      if (this.options.ecmaVersion < 6) {
        break;
      }
      ++this.pos;
      return this.finishToken(types.backQuote);
    case 48:
      var next = this.input.charCodeAt(this.pos + 1);
      if (next === 120 || next === 88) {
        return this.readRadixNumber(16);
      }
      if (this.options.ecmaVersion >= 6) {
        if (next === 111 || next === 79) {
          return this.readRadixNumber(8);
        }
        if (next === 98 || next === 66) {
          return this.readRadixNumber(2);
        }
      }
    case 49:
    case 50:
    case 51:
    case 52:
    case 53:
    case 54:
    case 55:
    case 56:
    case 57:
      return this.readNumber(false);
    case 34:
    case 39:
      return this.readString(code);
    case 47:
      return this.readToken_slash();
    case 37:
    case 42:
      return this.readToken_mult_modulo_exp(code);
    case 124:
    case 38:
      return this.readToken_pipe_amp(code);
    case 94:
      return this.readToken_caret();
    case 43:
    case 45:
      return this.readToken_plus_min(code);
    case 60:
    case 62:
      return this.readToken_lt_gt(code);
    case 61:
    case 33:
      return this.readToken_eq_excl(code);
    case 63:
      return this.readToken_question();
    case 126:
      return this.finishOp(types.prefix, 1);
  }
  this.raise(this.pos, "Unexpected character '" + codePointToString$1(code) + "'");
};
pp$9.finishOp = function(type, size) {
  var str = this.input.slice(this.pos, this.pos + size);
  this.pos += size;
  return this.finishToken(type, str);
};
pp$9.readRegexp = function() {
  var escaped, inClass, start = this.pos;
  for (; ; ) {
    if (this.pos >= this.input.length) {
      this.raise(start, "Unterminated regular expression");
    }
    var ch = this.input.charAt(this.pos);
    if (lineBreak.test(ch)) {
      this.raise(start, "Unterminated regular expression");
    }
    if (!escaped) {
      if (ch === "[") {
        inClass = true;
      } else if (ch === "]" && inClass) {
        inClass = false;
      } else if (ch === "/" && !inClass) {
        break;
      }
      escaped = ch === "\\";
    } else {
      escaped = false;
    }
    ++this.pos;
  }
  var pattern = this.input.slice(start, this.pos);
  ++this.pos;
  var flagsStart = this.pos;
  var flags = this.readWord1();
  if (this.containsEsc) {
    this.unexpected(flagsStart);
  }
  var state = this.regexpState || (this.regexpState = new RegExpValidationState(this));
  state.reset(start, pattern, flags);
  this.validateRegExpFlags(state);
  this.validateRegExpPattern(state);
  var value2 = null;
  try {
    value2 = new RegExp(pattern, flags);
  } catch (e) {
  }
  return this.finishToken(types.regexp, {pattern, flags, value: value2});
};
pp$9.readInt = function(radix, len, maybeLegacyOctalNumericLiteral) {
  var allowSeparators = this.options.ecmaVersion >= 12 && len === void 0;
  var isLegacyOctalNumericLiteral = maybeLegacyOctalNumericLiteral && this.input.charCodeAt(this.pos) === 48;
  var start = this.pos, total = 0, lastCode = 0;
  for (var i = 0, e = len == null ? Infinity : len; i < e; ++i, ++this.pos) {
    var code = this.input.charCodeAt(this.pos), val = void 0;
    if (allowSeparators && code === 95) {
      if (isLegacyOctalNumericLiteral) {
        this.raiseRecoverable(this.pos, "Numeric separator is not allowed in legacy octal numeric literals");
      }
      if (lastCode === 95) {
        this.raiseRecoverable(this.pos, "Numeric separator must be exactly one underscore");
      }
      if (i === 0) {
        this.raiseRecoverable(this.pos, "Numeric separator is not allowed at the first of digits");
      }
      lastCode = code;
      continue;
    }
    if (code >= 97) {
      val = code - 97 + 10;
    } else if (code >= 65) {
      val = code - 65 + 10;
    } else if (code >= 48 && code <= 57) {
      val = code - 48;
    } else {
      val = Infinity;
    }
    if (val >= radix) {
      break;
    }
    lastCode = code;
    total = total * radix + val;
  }
  if (allowSeparators && lastCode === 95) {
    this.raiseRecoverable(this.pos - 1, "Numeric separator is not allowed at the last of digits");
  }
  if (this.pos === start || len != null && this.pos - start !== len) {
    return null;
  }
  return total;
};
function stringToNumber(str, isLegacyOctalNumericLiteral) {
  if (isLegacyOctalNumericLiteral) {
    return parseInt(str, 8);
  }
  return parseFloat(str.replace(/_/g, ""));
}
function stringToBigInt(str) {
  if (typeof BigInt !== "function") {
    return null;
  }
  return BigInt(str.replace(/_/g, ""));
}
pp$9.readRadixNumber = function(radix) {
  var start = this.pos;
  this.pos += 2;
  var val = this.readInt(radix);
  if (val == null) {
    this.raise(this.start + 2, "Expected number in radix " + radix);
  }
  if (this.options.ecmaVersion >= 11 && this.input.charCodeAt(this.pos) === 110) {
    val = stringToBigInt(this.input.slice(start, this.pos));
    ++this.pos;
  } else if (isIdentifierStart(this.fullCharCodeAtPos())) {
    this.raise(this.pos, "Identifier directly after number");
  }
  return this.finishToken(types.num, val);
};
pp$9.readNumber = function(startsWithDot) {
  var start = this.pos;
  if (!startsWithDot && this.readInt(10, void 0, true) === null) {
    this.raise(start, "Invalid number");
  }
  var octal = this.pos - start >= 2 && this.input.charCodeAt(start) === 48;
  if (octal && this.strict) {
    this.raise(start, "Invalid number");
  }
  var next = this.input.charCodeAt(this.pos);
  if (!octal && !startsWithDot && this.options.ecmaVersion >= 11 && next === 110) {
    var val$1 = stringToBigInt(this.input.slice(start, this.pos));
    ++this.pos;
    if (isIdentifierStart(this.fullCharCodeAtPos())) {
      this.raise(this.pos, "Identifier directly after number");
    }
    return this.finishToken(types.num, val$1);
  }
  if (octal && /[89]/.test(this.input.slice(start, this.pos))) {
    octal = false;
  }
  if (next === 46 && !octal) {
    ++this.pos;
    this.readInt(10);
    next = this.input.charCodeAt(this.pos);
  }
  if ((next === 69 || next === 101) && !octal) {
    next = this.input.charCodeAt(++this.pos);
    if (next === 43 || next === 45) {
      ++this.pos;
    }
    if (this.readInt(10) === null) {
      this.raise(start, "Invalid number");
    }
  }
  if (isIdentifierStart(this.fullCharCodeAtPos())) {
    this.raise(this.pos, "Identifier directly after number");
  }
  var val = stringToNumber(this.input.slice(start, this.pos), octal);
  return this.finishToken(types.num, val);
};
pp$9.readCodePoint = function() {
  var ch = this.input.charCodeAt(this.pos), code;
  if (ch === 123) {
    if (this.options.ecmaVersion < 6) {
      this.unexpected();
    }
    var codePos = ++this.pos;
    code = this.readHexChar(this.input.indexOf("}", this.pos) - this.pos);
    ++this.pos;
    if (code > 1114111) {
      this.invalidStringToken(codePos, "Code point out of bounds");
    }
  } else {
    code = this.readHexChar(4);
  }
  return code;
};
function codePointToString$1(code) {
  if (code <= 65535) {
    return String.fromCharCode(code);
  }
  code -= 65536;
  return String.fromCharCode((code >> 10) + 55296, (code & 1023) + 56320);
}
pp$9.readString = function(quote) {
  var out = "", chunkStart = ++this.pos;
  for (; ; ) {
    if (this.pos >= this.input.length) {
      this.raise(this.start, "Unterminated string constant");
    }
    var ch = this.input.charCodeAt(this.pos);
    if (ch === quote) {
      break;
    }
    if (ch === 92) {
      out += this.input.slice(chunkStart, this.pos);
      out += this.readEscapedChar(false);
      chunkStart = this.pos;
    } else {
      if (isNewLine(ch, this.options.ecmaVersion >= 10)) {
        this.raise(this.start, "Unterminated string constant");
      }
      ++this.pos;
    }
  }
  out += this.input.slice(chunkStart, this.pos++);
  return this.finishToken(types.string, out);
};
var INVALID_TEMPLATE_ESCAPE_ERROR = {};
pp$9.tryReadTemplateToken = function() {
  this.inTemplateElement = true;
  try {
    this.readTmplToken();
  } catch (err) {
    if (err === INVALID_TEMPLATE_ESCAPE_ERROR) {
      this.readInvalidTemplateToken();
    } else {
      throw err;
    }
  }
  this.inTemplateElement = false;
};
pp$9.invalidStringToken = function(position, message) {
  if (this.inTemplateElement && this.options.ecmaVersion >= 9) {
    throw INVALID_TEMPLATE_ESCAPE_ERROR;
  } else {
    this.raise(position, message);
  }
};
pp$9.readTmplToken = function() {
  var out = "", chunkStart = this.pos;
  for (; ; ) {
    if (this.pos >= this.input.length) {
      this.raise(this.start, "Unterminated template");
    }
    var ch = this.input.charCodeAt(this.pos);
    if (ch === 96 || ch === 36 && this.input.charCodeAt(this.pos + 1) === 123) {
      if (this.pos === this.start && (this.type === types.template || this.type === types.invalidTemplate)) {
        if (ch === 36) {
          this.pos += 2;
          return this.finishToken(types.dollarBraceL);
        } else {
          ++this.pos;
          return this.finishToken(types.backQuote);
        }
      }
      out += this.input.slice(chunkStart, this.pos);
      return this.finishToken(types.template, out);
    }
    if (ch === 92) {
      out += this.input.slice(chunkStart, this.pos);
      out += this.readEscapedChar(true);
      chunkStart = this.pos;
    } else if (isNewLine(ch)) {
      out += this.input.slice(chunkStart, this.pos);
      ++this.pos;
      switch (ch) {
        case 13:
          if (this.input.charCodeAt(this.pos) === 10) {
            ++this.pos;
          }
        case 10:
          out += "\n";
          break;
        default:
          out += String.fromCharCode(ch);
          break;
      }
      if (this.options.locations) {
        ++this.curLine;
        this.lineStart = this.pos;
      }
      chunkStart = this.pos;
    } else {
      ++this.pos;
    }
  }
};
pp$9.readInvalidTemplateToken = function() {
  for (; this.pos < this.input.length; this.pos++) {
    switch (this.input[this.pos]) {
      case "\\":
        ++this.pos;
        break;
      case "$":
        if (this.input[this.pos + 1] !== "{") {
          break;
        }
      case "`":
        return this.finishToken(types.invalidTemplate, this.input.slice(this.start, this.pos));
    }
  }
  this.raise(this.start, "Unterminated template");
};
pp$9.readEscapedChar = function(inTemplate) {
  var ch = this.input.charCodeAt(++this.pos);
  ++this.pos;
  switch (ch) {
    case 110:
      return "\n";
    case 114:
      return "\r";
    case 120:
      return String.fromCharCode(this.readHexChar(2));
    case 117:
      return codePointToString$1(this.readCodePoint());
    case 116:
      return "	";
    case 98:
      return "\b";
    case 118:
      return "\v";
    case 102:
      return "\f";
    case 13:
      if (this.input.charCodeAt(this.pos) === 10) {
        ++this.pos;
      }
    case 10:
      if (this.options.locations) {
        this.lineStart = this.pos;
        ++this.curLine;
      }
      return "";
    case 56:
    case 57:
      if (inTemplate) {
        var codePos = this.pos - 1;
        this.invalidStringToken(codePos, "Invalid escape sequence in template string");
        return null;
      }
    default:
      if (ch >= 48 && ch <= 55) {
        var octalStr = this.input.substr(this.pos - 1, 3).match(/^[0-7]+/)[0];
        var octal = parseInt(octalStr, 8);
        if (octal > 255) {
          octalStr = octalStr.slice(0, -1);
          octal = parseInt(octalStr, 8);
        }
        this.pos += octalStr.length - 1;
        ch = this.input.charCodeAt(this.pos);
        if ((octalStr !== "0" || ch === 56 || ch === 57) && (this.strict || inTemplate)) {
          this.invalidStringToken(this.pos - 1 - octalStr.length, inTemplate ? "Octal literal in template string" : "Octal literal in strict mode");
        }
        return String.fromCharCode(octal);
      }
      if (isNewLine(ch)) {
        return "";
      }
      return String.fromCharCode(ch);
  }
};
pp$9.readHexChar = function(len) {
  var codePos = this.pos;
  var n2 = this.readInt(16, len);
  if (n2 === null) {
    this.invalidStringToken(codePos, "Bad character escape sequence");
  }
  return n2;
};
pp$9.readWord1 = function() {
  this.containsEsc = false;
  var word = "", first = true, chunkStart = this.pos;
  var astral = this.options.ecmaVersion >= 6;
  while (this.pos < this.input.length) {
    var ch = this.fullCharCodeAtPos();
    if (isIdentifierChar(ch, astral)) {
      this.pos += ch <= 65535 ? 1 : 2;
    } else if (ch === 92) {
      this.containsEsc = true;
      word += this.input.slice(chunkStart, this.pos);
      var escStart = this.pos;
      if (this.input.charCodeAt(++this.pos) !== 117) {
        this.invalidStringToken(this.pos, "Expecting Unicode escape sequence \\uXXXX");
      }
      ++this.pos;
      var esc = this.readCodePoint();
      if (!(first ? isIdentifierStart : isIdentifierChar)(esc, astral)) {
        this.invalidStringToken(escStart, "Invalid Unicode escape");
      }
      word += codePointToString$1(esc);
      chunkStart = this.pos;
    } else {
      break;
    }
    first = false;
  }
  return word + this.input.slice(chunkStart, this.pos);
};
pp$9.readWord = function() {
  var word = this.readWord1();
  var type = types.name;
  if (this.keywords.test(word)) {
    type = keywords$1[word];
  }
  return this.finishToken(type, word);
};
var version = "7.4.0";
Parser.acorn = {
  Parser,
  version,
  defaultOptions,
  Position,
  SourceLocation,
  getLineInfo,
  Node,
  TokenType,
  tokTypes: types,
  keywordTypes: keywords$1,
  TokContext,
  tokContexts: types$1,
  isIdentifierChar,
  isIdentifierStart,
  Token,
  isNewLine,
  lineBreak,
  lineBreakG,
  nonASCIIwhitespace
};
function parse3(input, options) {
  return Parser.parse(input, options);
}
function parseExpressionAt2(input, pos, options) {
  return Parser.parseExpressionAt(input, pos, options);
}
function walk(ast, {enter, leave}) {
  return visit(ast, null, enter, leave);
}
var should_skip = false;
var should_remove = false;
var replacement = null;
var context = {
  skip: () => should_skip = true,
  remove: () => should_remove = true,
  replace: (node2) => replacement = node2
};
function replace(parent, prop, index, node2) {
  if (parent) {
    if (index !== null) {
      parent[prop][index] = node2;
    } else {
      parent[prop] = node2;
    }
  }
}
function remove(parent, prop, index) {
  if (parent) {
    if (index !== null) {
      parent[prop].splice(index, 1);
    } else {
      delete parent[prop];
    }
  }
}
function visit(node2, parent, enter, leave, prop, index) {
  if (node2) {
    if (enter) {
      const _should_skip = should_skip;
      const _should_remove = should_remove;
      const _replacement = replacement;
      should_skip = false;
      should_remove = false;
      replacement = null;
      enter.call(context, node2, parent, prop, index);
      if (replacement) {
        node2 = replacement;
        replace(parent, prop, index, node2);
      }
      if (should_remove) {
        remove(parent, prop, index);
      }
      const skipped = should_skip;
      const removed = should_remove;
      should_skip = _should_skip;
      should_remove = _should_remove;
      replacement = _replacement;
      if (skipped)
        return node2;
      if (removed)
        return null;
    }
    for (const key in node2) {
      const value2 = node2[key];
      if (typeof value2 !== "object") {
        continue;
      } else if (Array.isArray(value2)) {
        for (let j = 0, k = 0; j < value2.length; j += 1, k += 1) {
          if (value2[j] !== null && typeof value2[j].type === "string") {
            if (!visit(value2[j], node2, enter, leave, key, k)) {
              j--;
            }
          }
        }
      } else if (value2 !== null && typeof value2.type === "string") {
        visit(value2, node2, enter, leave, key, null);
      }
    }
    if (leave) {
      const _replacement = replacement;
      const _should_remove = should_remove;
      replacement = null;
      should_remove = false;
      leave.call(context, node2, parent, prop, index);
      if (replacement) {
        node2 = replacement;
        replace(parent, prop, index, node2);
      }
      if (should_remove) {
        remove(parent, prop, index);
      }
      const removed = should_remove;
      replacement = _replacement;
      should_remove = _should_remove;
      if (removed)
        return null;
    }
  }
  return node2;
}
var charToInteger = {};
var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
for (var i = 0; i < chars.length; i++) {
  charToInteger[chars.charCodeAt(i)] = i;
}
function decode(mappings) {
  var decoded = [];
  var line = [];
  var segment = [
    0,
    0,
    0,
    0,
    0
  ];
  var j = 0;
  for (var i = 0, shift = 0, value2 = 0; i < mappings.length; i++) {
    var c2 = mappings.charCodeAt(i);
    if (c2 === 44) {
      segmentify(line, segment, j);
      j = 0;
    } else if (c2 === 59) {
      segmentify(line, segment, j);
      j = 0;
      decoded.push(line);
      line = [];
      segment[0] = 0;
    } else {
      var integer = charToInteger[c2];
      if (integer === void 0) {
        throw new Error("Invalid character (" + String.fromCharCode(c2) + ")");
      }
      var hasContinuationBit = integer & 32;
      integer &= 31;
      value2 += integer << shift;
      if (hasContinuationBit) {
        shift += 5;
      } else {
        var shouldNegate = value2 & 1;
        value2 >>>= 1;
        if (shouldNegate) {
          value2 = value2 === 0 ? -2147483648 : -value2;
        }
        segment[j] += value2;
        j++;
        value2 = shift = 0;
      }
    }
  }
  segmentify(line, segment, j);
  decoded.push(line);
  return decoded;
}
function segmentify(line, segment, j) {
  if (j === 4)
    line.push([segment[0], segment[1], segment[2], segment[3]]);
  else if (j === 5)
    line.push([segment[0], segment[1], segment[2], segment[3], segment[4]]);
  else if (j === 1)
    line.push([segment[0]]);
}
function encode(decoded) {
  var sourceFileIndex = 0;
  var sourceCodeLine = 0;
  var sourceCodeColumn = 0;
  var nameIndex = 0;
  var mappings = "";
  for (var i = 0; i < decoded.length; i++) {
    var line = decoded[i];
    if (i > 0)
      mappings += ";";
    if (line.length === 0)
      continue;
    var generatedCodeColumn = 0;
    var lineMappings = [];
    for (var _i = 0, line_1 = line; _i < line_1.length; _i++) {
      var segment = line_1[_i];
      var segmentMappings = encodeInteger(segment[0] - generatedCodeColumn);
      generatedCodeColumn = segment[0];
      if (segment.length > 1) {
        segmentMappings += encodeInteger(segment[1] - sourceFileIndex) + encodeInteger(segment[2] - sourceCodeLine) + encodeInteger(segment[3] - sourceCodeColumn);
        sourceFileIndex = segment[1];
        sourceCodeLine = segment[2];
        sourceCodeColumn = segment[3];
      }
      if (segment.length === 5) {
        segmentMappings += encodeInteger(segment[4] - nameIndex);
        nameIndex = segment[4];
      }
      lineMappings.push(segmentMappings);
    }
    mappings += lineMappings.join(",");
  }
  return mappings;
}
function encodeInteger(num) {
  var result = "";
  num = num < 0 ? -num << 1 | 1 : num << 1;
  do {
    var clamped = num & 31;
    num >>>= 5;
    if (num > 0) {
      clamped |= 32;
    }
    result += chars[clamped];
  } while (num > 0);
  return result;
}
var id = Math.round(Math.random() * 1e20).toString(36);
var re = new RegExp(`_${id}_(?:(\\d+)|(AT)|(HASH))_(\\w+)?`, "g");
var get_comment_handlers = (comments, raw) => ({
  onComment: (block, value2, start, end) => {
    if (block && /\n/.test(value2)) {
      let a = start;
      while (a > 0 && raw[a - 1] !== "\n")
        a -= 1;
      let b = a;
      while (/[ \t]/.test(raw[b]))
        b += 1;
      const indentation = raw.slice(a, b);
      value2 = value2.replace(new RegExp(`^${indentation}`, "gm"), "");
    }
    comments.push({type: block ? "Block" : "Line", value: value2, start, end});
  },
  enter(node2) {
    let comment;
    while (comments[0] && comments[0].start < node2.start) {
      comment = comments.shift();
      comment.value = comment.value.replace(re, (match, id2, at2, hash, value2) => {
        if (hash)
          return `#${value2}`;
        if (at2)
          return `@${value2}`;
        return match;
      });
      const next = comments[0] || node2;
      comment.has_trailing_newline = comment.type === "Line" || /\n/.test(raw.slice(comment.end, next.start));
      (node2.leadingComments || (node2.leadingComments = [])).push(comment);
    }
  },
  leave(node2) {
    if (comments[0]) {
      const slice2 = raw.slice(node2.end, comments[0].start);
      if (/^[,) \t]*$/.test(slice2)) {
        node2.trailingComments = [comments.shift()];
      }
    }
  }
});
function handle(node2, state) {
  const handler = handlers[node2.type];
  if (!handler) {
    throw new Error(`Not implemented ${node2.type}`);
  }
  const result = handler(node2, state);
  if (node2.leadingComments) {
    result.unshift(c(node2.leadingComments.map((comment) => comment.type === "Block" ? `/*${comment.value}*/${comment.has_trailing_newline ? `
${state.indent}` : ` `}` : `//${comment.value}${comment.has_trailing_newline ? `
${state.indent}` : ` `}`).join(``)));
  }
  if (node2.trailingComments) {
    state.comments.push(node2.trailingComments[0]);
  }
  return result;
}
function c(content, node2) {
  return {
    content,
    loc: node2 && node2.loc,
    has_newline: /\n/.test(content)
  };
}
var OPERATOR_PRECEDENCE = {
  "||": 2,
  "&&": 3,
  "??": 4,
  "|": 5,
  "^": 6,
  "&": 7,
  "==": 8,
  "!=": 8,
  "===": 8,
  "!==": 8,
  "<": 9,
  ">": 9,
  "<=": 9,
  ">=": 9,
  in: 9,
  instanceof: 9,
  "<<": 10,
  ">>": 10,
  ">>>": 10,
  "+": 11,
  "-": 11,
  "*": 12,
  "%": 12,
  "/": 12,
  "**": 13
};
var EXPRESSIONS_PRECEDENCE = {
  ArrayExpression: 20,
  TaggedTemplateExpression: 20,
  ThisExpression: 20,
  Identifier: 20,
  Literal: 18,
  TemplateLiteral: 20,
  Super: 20,
  SequenceExpression: 20,
  MemberExpression: 19,
  CallExpression: 19,
  NewExpression: 19,
  AwaitExpression: 17,
  ClassExpression: 17,
  FunctionExpression: 17,
  ObjectExpression: 17,
  UpdateExpression: 16,
  UnaryExpression: 15,
  BinaryExpression: 14,
  LogicalExpression: 13,
  ConditionalExpression: 4,
  ArrowFunctionExpression: 3,
  AssignmentExpression: 3,
  YieldExpression: 2,
  RestElement: 1
};
function needs_parens(node2, parent, is_right) {
  if (node2.type === "LogicalExpression" && parent.type === "LogicalExpression" && (parent.operator === "??" && node2.operator !== "??" || parent.operator !== "??" && node2.operator === "??")) {
    return true;
  }
  const precedence = EXPRESSIONS_PRECEDENCE[node2.type];
  const parent_precedence = EXPRESSIONS_PRECEDENCE[parent.type];
  if (precedence !== parent_precedence) {
    return !is_right && precedence === 15 && parent_precedence === 14 && parent.operator === "**" || precedence < parent_precedence;
  }
  if (precedence !== 13 && precedence !== 14) {
    return false;
  }
  if (node2.operator === "**" && parent.operator === "**") {
    return !is_right;
  }
  if (is_right) {
    return OPERATOR_PRECEDENCE[node2.operator] <= OPERATOR_PRECEDENCE[parent.operator];
  }
  return OPERATOR_PRECEDENCE[node2.operator] < OPERATOR_PRECEDENCE[parent.operator];
}
function has_call_expression(node2) {
  while (node2) {
    if (node2.type[0] === "CallExpression") {
      return true;
    } else if (node2.type === "MemberExpression") {
      node2 = node2.object;
    } else {
      return false;
    }
  }
}
var has_newline = (chunks) => {
  for (let i = 0; i < chunks.length; i += 1) {
    if (chunks[i].has_newline)
      return true;
  }
  return false;
};
var get_length = (chunks) => {
  let total = 0;
  for (let i = 0; i < chunks.length; i += 1) {
    total += chunks[i].content.length;
  }
  return total;
};
var sum = (a, b) => a + b;
var join = (nodes, separator) => {
  if (nodes.length === 0)
    return [];
  const joined = [...nodes[0]];
  for (let i = 1; i < nodes.length; i += 1) {
    joined.push(separator, ...nodes[i]);
  }
  return joined;
};
var scoped = (fn) => {
  return (node2, state) => {
    return fn(node2, {
      ...state,
      scope: state.scope_map.get(node2)
    });
  };
};
var deconflict = (name, names) => {
  const original = name;
  let i = 1;
  while (names.has(name)) {
    name = `${original}$${i++}`;
  }
  return name;
};
var handle_body = (nodes, state) => {
  const chunks = [];
  const body = nodes.map((statement) => {
    const chunks2 = handle(statement, {
      ...state,
      indent: state.indent
    });
    let add_newline = false;
    while (state.comments.length) {
      const comment = state.comments.shift();
      const prefix = add_newline ? `
${state.indent}` : ` `;
      chunks2.push(c(comment.type === "Block" ? `${prefix}/*${comment.value}*/` : `${prefix}//${comment.value}`));
      add_newline = comment.type === "Line";
    }
    return chunks2;
  });
  let needed_padding = false;
  for (let i = 0; i < body.length; i += 1) {
    const needs_padding = has_newline(body[i]);
    if (i > 0) {
      chunks.push(c(needs_padding || needed_padding ? `

${state.indent}` : `
${state.indent}`));
    }
    chunks.push(...body[i]);
    needed_padding = needs_padding;
  }
  return chunks;
};
var handle_var_declaration = (node2, state) => {
  const chunks = [c(`${node2.kind} `)];
  const declarators = node2.declarations.map((d) => handle(d, {
    ...state,
    indent: state.indent + (node2.declarations.length === 1 ? "" : "	")
  }));
  const multiple_lines = declarators.some(has_newline) || declarators.map(get_length).reduce(sum, 0) + (state.indent.length + declarators.length - 1) * 2 > 80;
  const separator = c(multiple_lines ? `,
${state.indent}	` : ", ");
  if (multiple_lines) {
    chunks.push(...join(declarators, separator));
  } else {
    chunks.push(...join(declarators, separator));
  }
  return chunks;
};
var handlers = {
  Program(node2, state) {
    return handle_body(node2.body, state);
  },
  BlockStatement: scoped((node2, state) => {
    return [
      c(`{
${state.indent}	`),
      ...handle_body(node2.body, {...state, indent: state.indent + "	"}),
      c(`
${state.indent}}`)
    ];
  }),
  EmptyStatement(node2, state) {
    return [];
  },
  ParenthesizedExpression(node2, state) {
    return handle(node2.expression, state);
  },
  ExpressionStatement(node2, state) {
    if (node2.expression.type === "AssignmentExpression" && node2.expression.left.type === "ObjectPattern") {
      return [
        c("("),
        ...handle(node2.expression, state),
        c(");")
      ];
    }
    return [
      ...handle(node2.expression, state),
      c(";")
    ];
  },
  IfStatement(node2, state) {
    const chunks = [
      c("if ("),
      ...handle(node2.test, state),
      c(") "),
      ...handle(node2.consequent, state)
    ];
    if (node2.alternate) {
      chunks.push(c(" else "), ...handle(node2.alternate, state));
    }
    return chunks;
  },
  LabeledStatement(node2, state) {
    return [
      ...handle(node2.label, state),
      c(": "),
      ...handle(node2.body, state)
    ];
  },
  BreakStatement(node2, state) {
    return node2.label ? [c("break "), ...handle(node2.label, state), c(";")] : [c("break;")];
  },
  ContinueStatement(node2, state) {
    return node2.label ? [c("continue "), ...handle(node2.label, state), c(";")] : [c("continue;")];
  },
  WithStatement(node2, state) {
    return [
      c("with ("),
      ...handle(node2.object, state),
      c(") "),
      ...handle(node2.body, state)
    ];
  },
  SwitchStatement(node2, state) {
    const chunks = [
      c("switch ("),
      ...handle(node2.discriminant, state),
      c(") {")
    ];
    node2.cases.forEach((block) => {
      if (block.test) {
        chunks.push(c(`
${state.indent}	case `), ...handle(block.test, {...state, indent: `${state.indent}	`}), c(":"));
      } else {
        chunks.push(c(`
${state.indent}	default:`));
      }
      block.consequent.forEach((statement) => {
        chunks.push(c(`
${state.indent}		`), ...handle(statement, {...state, indent: `${state.indent}		`}));
      });
    });
    chunks.push(c(`
${state.indent}}`));
    return chunks;
  },
  ReturnStatement(node2, state) {
    if (node2.argument) {
      return [
        c("return "),
        ...handle(node2.argument, state),
        c(";")
      ];
    } else {
      return [c("return;")];
    }
  },
  ThrowStatement(node2, state) {
    return [
      c("throw "),
      ...handle(node2.argument, state),
      c(";")
    ];
  },
  TryStatement(node2, state) {
    const chunks = [
      c("try "),
      ...handle(node2.block, state)
    ];
    if (node2.handler) {
      if (node2.handler.param) {
        chunks.push(c(" catch("), ...handle(node2.handler.param, state), c(") "));
      } else {
        chunks.push(c(" catch "));
      }
      chunks.push(...handle(node2.handler.body, state));
    }
    if (node2.finalizer) {
      chunks.push(c(" finally "), ...handle(node2.finalizer, state));
    }
    return chunks;
  },
  WhileStatement(node2, state) {
    return [
      c("while ("),
      ...handle(node2.test, state),
      c(") "),
      ...handle(node2.body, state)
    ];
  },
  DoWhileStatement(node2, state) {
    return [
      c("do "),
      ...handle(node2.body, state),
      c(" while ("),
      ...handle(node2.test, state),
      c(");")
    ];
  },
  ForStatement: scoped((node2, state) => {
    const chunks = [c("for (")];
    if (node2.init) {
      if (node2.init.type === "VariableDeclaration") {
        chunks.push(...handle_var_declaration(node2.init, state));
      } else {
        chunks.push(...handle(node2.init, state));
      }
    }
    chunks.push(c("; "));
    if (node2.test)
      chunks.push(...handle(node2.test, state));
    chunks.push(c("; "));
    if (node2.update)
      chunks.push(...handle(node2.update, state));
    chunks.push(c(") "), ...handle(node2.body, state));
    return chunks;
  }),
  ForInStatement: scoped((node2, state) => {
    const chunks = [
      c(`for ${node2.await ? "await " : ""}(`)
    ];
    if (node2.left.type === "VariableDeclaration") {
      chunks.push(...handle_var_declaration(node2.left, state));
    } else {
      chunks.push(...handle(node2.left, state));
    }
    chunks.push(c(node2.type === "ForInStatement" ? ` in ` : ` of `), ...handle(node2.right, state), c(") "), ...handle(node2.body, state));
    return chunks;
  }),
  DebuggerStatement(node2, state) {
    return [c("debugger", node2), c(";")];
  },
  FunctionDeclaration: scoped((node2, state) => {
    const chunks = [];
    if (node2.async)
      chunks.push(c("async "));
    chunks.push(c(node2.generator ? "function* " : "function "));
    if (node2.id)
      chunks.push(...handle(node2.id, state));
    chunks.push(c("("));
    const params = node2.params.map((p) => handle(p, {
      ...state,
      indent: state.indent + "	"
    }));
    const multiple_lines = params.some(has_newline) || params.map(get_length).reduce(sum, 0) + (state.indent.length + params.length - 1) * 2 > 80;
    const separator = c(multiple_lines ? `,
${state.indent}` : ", ");
    if (multiple_lines) {
      chunks.push(c(`
${state.indent}	`), ...join(params, separator), c(`
${state.indent}`));
    } else {
      chunks.push(...join(params, separator));
    }
    chunks.push(c(") "), ...handle(node2.body, state));
    return chunks;
  }),
  VariableDeclaration(node2, state) {
    return handle_var_declaration(node2, state).concat(c(";"));
  },
  VariableDeclarator(node2, state) {
    if (node2.init) {
      return [
        ...handle(node2.id, state),
        c(" = "),
        ...handle(node2.init, state)
      ];
    } else {
      return handle(node2.id, state);
    }
  },
  ClassDeclaration(node2, state) {
    const chunks = [c("class ")];
    if (node2.id)
      chunks.push(...handle(node2.id, state), c(" "));
    if (node2.superClass) {
      chunks.push(c("extends "), ...handle(node2.superClass, state), c(" "));
    }
    chunks.push(...handle(node2.body, state));
    return chunks;
  },
  ImportDeclaration(node2, state) {
    const chunks = [c("import ")];
    const {length: length2} = node2.specifiers;
    const source = handle(node2.source, state);
    if (length2 > 0) {
      let i = 0;
      while (i < length2) {
        if (i > 0) {
          chunks.push(c(", "));
        }
        const specifier = node2.specifiers[i];
        if (specifier.type === "ImportDefaultSpecifier") {
          chunks.push(c(specifier.local.name, specifier));
          i += 1;
        } else if (specifier.type === "ImportNamespaceSpecifier") {
          chunks.push(c("* as " + specifier.local.name, specifier));
          i += 1;
        } else {
          break;
        }
      }
      if (i < length2) {
        const specifiers = node2.specifiers.slice(i).map((specifier) => {
          const name = handle(specifier.imported, state)[0];
          const as = handle(specifier.local, state)[0];
          if (name.content === as.content) {
            return [as];
          }
          return [name, c(" as "), as];
        });
        const width = get_length(chunks) + specifiers.map(get_length).reduce(sum, 0) + 2 * specifiers.length + 6 + get_length(source);
        if (width > 80) {
          chunks.push(c(`{
	`), ...join(specifiers, c(",\n	")), c("\n}"));
        } else {
          chunks.push(c(`{ `), ...join(specifiers, c(", ")), c(" }"));
        }
      }
      chunks.push(c(" from "));
    }
    chunks.push(...source, c(";"));
    return chunks;
  },
  ImportExpression(node2, state) {
    return [c("import("), ...handle(node2.source, state), c(")")];
  },
  ExportDefaultDeclaration(node2, state) {
    const chunks = [
      c(`export default `),
      ...handle(node2.declaration, state)
    ];
    if (node2.declaration.type !== "FunctionDeclaration") {
      chunks.push(c(";"));
    }
    return chunks;
  },
  ExportNamedDeclaration(node2, state) {
    const chunks = [c("export ")];
    if (node2.declaration) {
      chunks.push(...handle(node2.declaration, state));
    } else {
      const specifiers = node2.specifiers.map((specifier) => {
        const name = handle(specifier.local, state)[0];
        const as = handle(specifier.exported, state)[0];
        if (name.content === as.content) {
          return [name];
        }
        return [name, c(" as "), as];
      });
      const width = 7 + specifiers.map(get_length).reduce(sum, 0) + 2 * specifiers.length;
      if (width > 80) {
        chunks.push(c("{\n	"), ...join(specifiers, c(",\n	")), c("\n}"));
      } else {
        chunks.push(c("{ "), ...join(specifiers, c(", ")), c(" }"));
      }
      if (node2.source) {
        chunks.push(c(" from "), ...handle(node2.source, state));
      }
    }
    chunks.push(c(";"));
    return chunks;
  },
  ExportAllDeclaration(node2, state) {
    return [
      c(`export * from `),
      ...handle(node2.source, state),
      c(`;`)
    ];
  },
  MethodDefinition(node2, state) {
    const chunks = [];
    if (node2.static) {
      chunks.push(c("static "));
    }
    if (node2.kind === "get" || node2.kind === "set") {
      chunks.push(c(node2.kind + " "));
    }
    if (node2.value.async) {
      chunks.push(c("async "));
    }
    if (node2.value.generator) {
      chunks.push(c("*"));
    }
    if (node2.computed) {
      chunks.push(c("["), ...handle(node2.key, state), c("]"));
    } else {
      chunks.push(...handle(node2.key, state));
    }
    chunks.push(c("("));
    const {params} = node2.value;
    for (let i = 0; i < params.length; i += 1) {
      chunks.push(...handle(params[i], state));
      if (i < params.length - 1)
        chunks.push(c(", "));
    }
    chunks.push(c(") "), ...handle(node2.value.body, state));
    return chunks;
  },
  ArrowFunctionExpression: scoped((node2, state) => {
    const chunks = [];
    if (node2.async)
      chunks.push(c("async "));
    if (node2.params.length === 1 && node2.params[0].type === "Identifier") {
      chunks.push(...handle(node2.params[0], state));
    } else {
      const params = node2.params.map((param) => handle(param, {
        ...state,
        indent: state.indent + "	"
      }));
      chunks.push(c("("), ...join(params, c(", ")), c(")"));
    }
    chunks.push(c(" => "));
    if (node2.body.type === "ObjectExpression") {
      chunks.push(c("("), ...handle(node2.body, state), c(")"));
    } else {
      chunks.push(...handle(node2.body, state));
    }
    return chunks;
  }),
  ThisExpression(node2, state) {
    return [c("this", node2)];
  },
  Super(node2, state) {
    return [c("super", node2)];
  },
  RestElement(node2, state) {
    return [c("..."), ...handle(node2.argument, state)];
  },
  YieldExpression(node2, state) {
    if (node2.argument) {
      return [c(node2.delegate ? `yield* ` : `yield `), ...handle(node2.argument, state)];
    }
    return [c(node2.delegate ? `yield*` : `yield`)];
  },
  AwaitExpression(node2, state) {
    if (node2.argument) {
      const precedence = EXPRESSIONS_PRECEDENCE[node2.argument.type];
      if (precedence && precedence < EXPRESSIONS_PRECEDENCE.AwaitExpression) {
        return [c("await ("), ...handle(node2.argument, state), c(")")];
      } else {
        return [c("await "), ...handle(node2.argument, state)];
      }
    }
    return [c("await")];
  },
  TemplateLiteral(node2, state) {
    const chunks = [c("`")];
    const {quasis, expressions} = node2;
    for (let i = 0; i < expressions.length; i++) {
      chunks.push(c(quasis[i].value.raw), c("${"), ...handle(expressions[i], state), c("}"));
    }
    chunks.push(c(quasis[quasis.length - 1].value.raw), c("`"));
    return chunks;
  },
  TaggedTemplateExpression(node2, state) {
    return handle(node2.tag, state).concat(handle(node2.quasi, state));
  },
  ArrayExpression(node2, state) {
    const chunks = [c("[")];
    const elements = [];
    let sparse_commas = [];
    for (let i = 0; i < node2.elements.length; i += 1) {
      const element2 = node2.elements[i];
      if (element2) {
        elements.push([...sparse_commas, ...handle(element2, {
          ...state,
          indent: state.indent + "	"
        })]);
        sparse_commas = [];
      } else {
        sparse_commas.push(c(","));
      }
    }
    const multiple_lines = elements.some(has_newline) || elements.map(get_length).reduce(sum, 0) + (state.indent.length + elements.length - 1) * 2 > 80;
    if (multiple_lines) {
      chunks.push(c(`
${state.indent}	`), ...join(elements, c(`,
${state.indent}	`)), c(`
${state.indent}`), ...sparse_commas);
    } else {
      chunks.push(...join(elements, c(", ")), ...sparse_commas);
    }
    chunks.push(c("]"));
    return chunks;
  },
  ObjectExpression(node2, state) {
    if (node2.properties.length === 0) {
      return [c("{}")];
    }
    let has_inline_comment = false;
    const chunks = [];
    const separator = c(", ");
    node2.properties.forEach((p, i) => {
      chunks.push(...handle(p, {
        ...state,
        indent: state.indent + "	"
      }));
      if (state.comments.length) {
        chunks.push(c(", "));
        while (state.comments.length) {
          const comment = state.comments.shift();
          chunks.push(c(comment.type === "Block" ? `/*${comment.value}*/
${state.indent}	` : `//${comment.value}
${state.indent}	`));
          if (comment.type === "Line") {
            has_inline_comment = true;
          }
        }
      } else {
        if (i < node2.properties.length - 1) {
          chunks.push(separator);
        }
      }
    });
    const multiple_lines = has_inline_comment || has_newline(chunks) || get_length(chunks) > 40;
    if (multiple_lines) {
      separator.content = `,
${state.indent}	`;
    }
    return [
      c(multiple_lines ? `{
${state.indent}	` : `{ `),
      ...chunks,
      c(multiple_lines ? `
${state.indent}}` : ` }`)
    ];
  },
  Property(node2, state) {
    const value2 = handle(node2.value, state);
    if (node2.key === node2.value) {
      return value2;
    }
    if (!node2.computed && node2.value.type === "AssignmentPattern" && node2.value.left.type === "Identifier" && node2.value.left.name === node2.key.name) {
      return value2;
    }
    if (node2.value.type === "Identifier" && (node2.key.type === "Identifier" && node2.key.name === value2[0].content || node2.key.type === "Literal" && node2.key.value === value2[0].content)) {
      return value2;
    }
    const key = handle(node2.key, state);
    if (node2.value.type === "FunctionExpression" && !node2.value.id) {
      state = {
        ...state,
        scope: state.scope_map.get(node2.value)
      };
      const chunks = node2.kind !== "init" ? [c(`${node2.kind} `)] : [];
      if (node2.value.async) {
        chunks.push(c("async "));
      }
      if (node2.value.generator) {
        chunks.push(c("*"));
      }
      chunks.push(...node2.computed ? [c("["), ...key, c("]")] : key, c("("), ...join(node2.value.params.map((param) => handle(param, state)), c(", ")), c(") "), ...handle(node2.value.body, state));
      return chunks;
    }
    if (node2.computed) {
      return [
        c("["),
        ...key,
        c("]: "),
        ...value2
      ];
    }
    return [
      ...key,
      c(": "),
      ...value2
    ];
  },
  ObjectPattern(node2, state) {
    const chunks = [c("{ ")];
    for (let i = 0; i < node2.properties.length; i += 1) {
      chunks.push(...handle(node2.properties[i], state));
      if (i < node2.properties.length - 1)
        chunks.push(c(", "));
    }
    chunks.push(c(" }"));
    return chunks;
  },
  SequenceExpression(node2, state) {
    const expressions = node2.expressions.map((e) => handle(e, state));
    return [
      c("("),
      ...join(expressions, c(", ")),
      c(")")
    ];
  },
  UnaryExpression(node2, state) {
    const chunks = [c(node2.operator)];
    if (node2.operator.length > 1) {
      chunks.push(c(" "));
    }
    if (EXPRESSIONS_PRECEDENCE[node2.argument.type] < EXPRESSIONS_PRECEDENCE.UnaryExpression) {
      chunks.push(c("("), ...handle(node2.argument, state), c(")"));
    } else {
      chunks.push(...handle(node2.argument, state));
    }
    return chunks;
  },
  UpdateExpression(node2, state) {
    return node2.prefix ? [c(node2.operator), ...handle(node2.argument, state)] : [...handle(node2.argument, state), c(node2.operator)];
  },
  AssignmentExpression(node2, state) {
    return [
      ...handle(node2.left, state),
      c(` ${node2.operator || "="} `),
      ...handle(node2.right, state)
    ];
  },
  BinaryExpression(node2, state) {
    const chunks = [];
    if (needs_parens(node2.left, node2, false)) {
      chunks.push(c("("), ...handle(node2.left, state), c(")"));
    } else {
      chunks.push(...handle(node2.left, state));
    }
    chunks.push(c(` ${node2.operator} `));
    if (needs_parens(node2.right, node2, true)) {
      chunks.push(c("("), ...handle(node2.right, state), c(")"));
    } else {
      chunks.push(...handle(node2.right, state));
    }
    return chunks;
  },
  ConditionalExpression(node2, state) {
    const chunks = [];
    if (EXPRESSIONS_PRECEDENCE[node2.test.type] > EXPRESSIONS_PRECEDENCE.ConditionalExpression) {
      chunks.push(...handle(node2.test, state));
    } else {
      chunks.push(c("("), ...handle(node2.test, state), c(")"));
    }
    const child_state = {...state, indent: state.indent + "	"};
    const consequent = handle(node2.consequent, child_state);
    const alternate = handle(node2.alternate, child_state);
    const multiple_lines = has_newline(consequent) || has_newline(alternate) || get_length(chunks) + get_length(consequent) + get_length(alternate) > 50;
    if (multiple_lines) {
      chunks.push(c(`
${state.indent}? `), ...consequent, c(`
${state.indent}: `), ...alternate);
    } else {
      chunks.push(c(` ? `), ...consequent, c(` : `), ...alternate);
    }
    return chunks;
  },
  NewExpression(node2, state) {
    const chunks = [c("new ")];
    if (EXPRESSIONS_PRECEDENCE[node2.callee.type] < EXPRESSIONS_PRECEDENCE.CallExpression || has_call_expression(node2.callee)) {
      chunks.push(c("("), ...handle(node2.callee, state), c(")"));
    } else {
      chunks.push(...handle(node2.callee, state));
    }
    const args = node2.arguments.map((arg) => handle(arg, {
      ...state,
      indent: state.indent + "	"
    }));
    const separator = args.some(has_newline) ? c(",\n" + state.indent) : c(", ");
    chunks.push(c("("), ...join(args, separator), c(")"));
    return chunks;
  },
  ChainExpression(node2, state) {
    return handle(node2.expression, state);
  },
  CallExpression(node2, state) {
    const chunks = [];
    if (EXPRESSIONS_PRECEDENCE[node2.callee.type] < EXPRESSIONS_PRECEDENCE.CallExpression) {
      chunks.push(c("("), ...handle(node2.callee, state), c(")"));
    } else {
      chunks.push(...handle(node2.callee, state));
    }
    if (node2.optional) {
      chunks.push(c("?."));
    }
    const args = node2.arguments.map((arg) => handle(arg, state));
    const multiple_lines = args.slice(0, -1).some(has_newline);
    if (multiple_lines) {
      const args2 = node2.arguments.map((arg) => handle(arg, {
        ...state,
        indent: `${state.indent}	`
      }));
      chunks.push(c(`(
${state.indent}	`), ...join(args2, c(`,
${state.indent}	`)), c(`
${state.indent})`));
    } else {
      chunks.push(c("("), ...join(args, c(", ")), c(")"));
    }
    return chunks;
  },
  MemberExpression(node2, state) {
    const chunks = [];
    if (EXPRESSIONS_PRECEDENCE[node2.object.type] < EXPRESSIONS_PRECEDENCE.MemberExpression) {
      chunks.push(c("("), ...handle(node2.object, state), c(")"));
    } else {
      chunks.push(...handle(node2.object, state));
    }
    if (node2.computed) {
      if (node2.optional) {
        chunks.push(c("?."));
      }
      chunks.push(c("["), ...handle(node2.property, state), c("]"));
    } else {
      chunks.push(c(node2.optional ? "?." : "."), ...handle(node2.property, state));
    }
    return chunks;
  },
  MetaProperty(node2, state) {
    return [...handle(node2.meta, state), c("."), ...handle(node2.property, state)];
  },
  Identifier(node2, state) {
    let name = node2.name;
    if (name[0] === "@") {
      name = state.getName(name.slice(1));
    } else if (node2.name[0] === "#") {
      const owner = state.scope.find_owner(node2.name);
      if (!owner) {
        throw new Error(`Could not find owner for node`);
      }
      if (!state.deconflicted.has(owner)) {
        state.deconflicted.set(owner, new Map());
      }
      const deconflict_map = state.deconflicted.get(owner);
      if (!deconflict_map.has(node2.name)) {
        deconflict_map.set(node2.name, deconflict(node2.name.slice(1), owner.references));
      }
      name = deconflict_map.get(node2.name);
    }
    return [c(name, node2)];
  },
  Literal(node2, state) {
    if (typeof node2.value === "string") {
      return [
        c(JSON.stringify(node2.value).replace(re, (_m, _i, at2, hash, name) => {
          if (at2)
            return "@" + name;
          if (hash)
            return "#" + name;
          throw new Error(`this shouldn't happen`);
        }), node2)
      ];
    }
    const {regex} = node2;
    if (regex) {
      return [c(`/${regex.pattern}/${regex.flags}`, node2)];
    }
    return [c(String(node2.value), node2)];
  }
};
handlers.ForOfStatement = handlers.ForInStatement;
handlers.FunctionExpression = handlers.FunctionDeclaration;
handlers.ClassExpression = handlers.ClassDeclaration;
handlers.ClassBody = handlers.BlockStatement;
handlers.SpreadElement = handlers.RestElement;
handlers.ArrayPattern = handlers.ArrayExpression;
handlers.LogicalExpression = handlers.BinaryExpression;
handlers.AssignmentPattern = handlers.AssignmentExpression;
var btoa$1 = () => {
  throw new Error("Unsupported environment: `window.btoa` or `Buffer` should be supported.");
};
if (typeof window !== "undefined" && typeof window.btoa === "function") {
  btoa$1 = (str) => window.btoa(unescape(encodeURIComponent(str)));
} else if (typeof Buffer === "function") {
  btoa$1 = (str) => Buffer.from(str, "utf-8").toString("base64");
}
var sigils = {
  "@": "AT",
  "#": "HASH"
};
var join$1 = (strings) => {
  let str = strings[0];
  for (let i = 1; i < strings.length; i += 1) {
    str += `_${id}_${i - 1}_${strings[i]}`;
  }
  return str.replace(/([@#])(\w+)/g, (_m, sigil, name) => `_${id}_${sigils[sigil]}_${name}`);
};
var flatten_body = (array, target) => {
  for (let i = 0; i < array.length; i += 1) {
    const statement = array[i];
    if (Array.isArray(statement)) {
      flatten_body(statement, target);
      continue;
    }
    if (statement.type === "ExpressionStatement") {
      if (statement.expression === EMPTY)
        continue;
      if (Array.isArray(statement.expression)) {
        let node2 = statement.expression[0];
        while (Array.isArray(node2))
          node2 = node2[0];
        if (node2)
          node2.leadingComments = statement.leadingComments;
        flatten_body(statement.expression, target);
        continue;
      }
      if (/(Expression|Literal)$/.test(statement.expression.type)) {
        target.push(statement);
        continue;
      }
      if (statement.leadingComments)
        statement.expression.leadingComments = statement.leadingComments;
      if (statement.trailingComments)
        statement.expression.trailingComments = statement.trailingComments;
      target.push(statement.expression);
      continue;
    }
    target.push(statement);
  }
  return target;
};
var flatten_properties = (array, target) => {
  for (let i = 0; i < array.length; i += 1) {
    const property = array[i];
    if (property.value === EMPTY)
      continue;
    if (property.key === property.value && Array.isArray(property.key)) {
      flatten_properties(property.key, target);
      continue;
    }
    target.push(property);
  }
  return target;
};
var flatten = (nodes, target) => {
  for (let i = 0; i < nodes.length; i += 1) {
    const node2 = nodes[i];
    if (node2 === EMPTY)
      continue;
    if (Array.isArray(node2)) {
      flatten(node2, target);
      continue;
    }
    target.push(node2);
  }
  return target;
};
var EMPTY = {type: "Empty"};
var acorn_opts = (comments, raw) => {
  const {onComment} = get_comment_handlers(comments, raw);
  return {
    ecmaVersion: 2020,
    sourceType: "module",
    allowAwaitOutsideFunction: true,
    allowImportExportEverywhere: true,
    allowReturnOutsideFunction: true,
    onComment
  };
};
var inject = (raw, node2, values, comments) => {
  comments.forEach((comment) => {
    comment.value = comment.value.replace(re, (m, i) => +i in values ? values[+i] : m);
  });
  const {enter, leave} = get_comment_handlers(comments, raw);
  walk(node2, {
    enter,
    leave(node3, parent, key, index) {
      if (node3.type === "Identifier") {
        re.lastIndex = 0;
        const match = re.exec(node3.name);
        if (match) {
          if (match[1]) {
            if (+match[1] in values) {
              let value2 = values[+match[1]];
              if (typeof value2 === "string") {
                value2 = {type: "Identifier", name: value2, leadingComments: node3.leadingComments, trailingComments: node3.trailingComments};
              } else if (typeof value2 === "number") {
                value2 = {type: "Literal", value: value2, leadingComments: node3.leadingComments, trailingComments: node3.trailingComments};
              }
              this.replace(value2 || EMPTY);
            }
          } else {
            node3.name = `${match[2] ? `@` : `#`}${match[4]}`;
          }
        }
      }
      if (node3.type === "Literal") {
        if (typeof node3.value === "string") {
          re.lastIndex = 0;
          node3.value = node3.value.replace(re, (m, i) => +i in values ? values[+i] : m);
        }
      }
      if (node3.type === "TemplateElement") {
        re.lastIndex = 0;
        node3.value.raw = node3.value.raw.replace(re, (m, i) => +i in values ? values[+i] : m);
      }
      if (node3.type === "Program" || node3.type === "BlockStatement") {
        node3.body = flatten_body(node3.body, []);
      }
      if (node3.type === "ObjectExpression" || node3.type === "ObjectPattern") {
        node3.properties = flatten_properties(node3.properties, []);
      }
      if (node3.type === "ArrayExpression" || node3.type === "ArrayPattern") {
        node3.elements = flatten(node3.elements, []);
      }
      if (node3.type === "FunctionExpression" || node3.type === "FunctionDeclaration" || node3.type === "ArrowFunctionExpression") {
        node3.params = flatten(node3.params, []);
      }
      if (node3.type === "CallExpression" || node3.type === "NewExpression") {
        node3.arguments = flatten(node3.arguments, []);
      }
      if (node3.type === "ImportDeclaration" || node3.type === "ExportNamedDeclaration") {
        node3.specifiers = flatten(node3.specifiers, []);
      }
      if (node3.type === "ForStatement") {
        node3.init = node3.init === EMPTY ? null : node3.init;
        node3.test = node3.test === EMPTY ? null : node3.test;
        node3.update = node3.update === EMPTY ? null : node3.update;
      }
      leave(node3);
    }
  });
};
function x(strings, ...values) {
  const str = join$1(strings);
  const comments = [];
  try {
    const expression2 = parseExpressionAt2(str, 0, acorn_opts(comments, str));
    const match = /\S+/.exec(str.slice(expression2.end));
    if (match) {
      throw new Error(`Unexpected token '${match[0]}'`);
    }
    inject(str, expression2, values, comments);
    return expression2;
  } catch (err) {
    handle_error(str, err);
  }
}
function handle_error(str, err) {
  re.lastIndex = 0;
  str = str.replace(re, (m, i, at2, hash, name) => {
    if (at2)
      return `@${name}`;
    if (hash)
      return `#${name}`;
    return "${...}";
  });
  console.log(`failed to parse:
${str}`);
  throw err;
}
var parse$1 = (source, opts) => {
  const comments = [];
  const {onComment, enter, leave} = get_comment_handlers(comments, source);
  const ast = parse3(source, {onComment, ...opts});
  walk(ast, {enter, leave});
  return ast;
};
var parse$2 = (source) => parse$1(source, {
  sourceType: "module",
  ecmaVersion: 12,
  locations: true
});
var script_closing_tag = "</script>";
function get_context(parser2, attributes, start) {
  const context2 = attributes.find((attribute) => attribute.name === "context");
  if (!context2)
    return "default";
  if (context2.value.length !== 1 || context2.value[0].type !== "Text") {
    parser2.error({
      code: "invalid-script",
      message: "context attribute must be static"
    }, start);
  }
  const value2 = context2.value[0].data;
  if (value2 !== "module") {
    parser2.error({
      code: "invalid-script",
      message: 'If the context attribute is supplied, its value must be "module"'
    }, context2.start);
  }
  return value2;
}
function read_script(parser2, start, attributes) {
  const script_start = parser2.index;
  const script_end = parser2.template.indexOf(script_closing_tag, script_start);
  if (script_end === -1) {
    parser2.error({
      code: "unclosed-script",
      message: "<script> must have a closing tag"
    });
  }
  const source = parser2.template.slice(0, script_start).replace(/[^\n]/g, " ") + parser2.template.slice(script_start, script_end);
  parser2.index = script_end + script_closing_tag.length;
  let ast;
  try {
    ast = parse$2(source);
  } catch (err) {
    parser2.acorn_error(err);
  }
  ast.start = script_start;
  return {
    type: "Script",
    start,
    end: parser2.index,
    context: get_context(parser2, attributes, start),
    content: ast
  };
}
var MAX_LINE_LENGTH = 100;
var OFFSET_CORRECTION = 60;
var TAB_REPLACEMENT = "    ";
function sourceFragment(error2, extraLines) {
  function processLines(start, end) {
    return lines.slice(start, end).map(function(line2, idx) {
      var num = String(start + idx + 1);
      while (num.length < maxNumLength) {
        num = " " + num;
      }
      return num + " |" + line2;
    }).join("\n");
  }
  var lines = error2.source.split(/\n|\r\n?|\f/);
  var line = error2.line;
  var column = error2.column;
  var startLine = Math.max(1, line - extraLines) - 1;
  var endLine = Math.min(line + extraLines, lines.length + 1);
  var maxNumLength = Math.max(4, String(endLine).length) + 1;
  var cutLeft = 0;
  column += (TAB_REPLACEMENT.length - 1) * (lines[line - 1].substr(0, column - 1).match(/\t/g) || []).length;
  if (column > MAX_LINE_LENGTH) {
    cutLeft = column - OFFSET_CORRECTION + 3;
    column = OFFSET_CORRECTION - 2;
  }
  for (var i = startLine; i <= endLine; i++) {
    if (i >= 0 && i < lines.length) {
      lines[i] = lines[i].replace(/\t/g, TAB_REPLACEMENT);
      lines[i] = (cutLeft > 0 && lines[i].length > cutLeft ? "\u2026" : "") + lines[i].substr(cutLeft, MAX_LINE_LENGTH - 2) + (lines[i].length > cutLeft + MAX_LINE_LENGTH - 1 ? "\u2026" : "");
    }
  }
  return [
    processLines(startLine, line),
    new Array(column + maxNumLength + 2).join("-") + "^",
    processLines(line, endLine)
  ].join("\n");
}
var CssSyntaxError = function(message, source, offset2, line, column) {
  var error2 = Object.create(SyntaxError.prototype);
  error2.name = "CssSyntaxError";
  error2.message = message;
  error2.stack = (new Error().stack || "").replace(/^.+\n/, error2.name + ": " + error2.message + "\n");
  error2.source = source;
  error2.offset = offset2;
  error2.line = line;
  error2.column = column;
  error2.sourceFragment = function(extraLines) {
    return sourceFragment(error2, isNaN(extraLines) ? 0 : extraLines);
  };
  Object.defineProperty(error2, "formattedMessage", {
    get: function() {
      return "Parse error: " + error2.message + "\n" + sourceFragment(error2, 2);
    }
  });
  error2.parseError = {
    offset: offset2,
    line,
    column
  };
  return error2;
};
var error = CssSyntaxError;
var WHITESPACE = 1;
var IDENTIFIER = 2;
var NUMBER = 3;
var STRING = 4;
var COMMENT = 5;
var PUNCTUATOR = 6;
var CDO = 7;
var CDC = 8;
var ATRULE = 14;
var FUNCTION = 15;
var URL$1 = 16;
var RAW = 17;
var TAB = 9;
var N = 10;
var F = 12;
var R = 13;
var SPACE = 32;
var TYPE = {
  WhiteSpace: WHITESPACE,
  Identifier: IDENTIFIER,
  Number: NUMBER,
  String: STRING,
  Comment: COMMENT,
  Punctuator: PUNCTUATOR,
  CDO,
  CDC,
  Atrule: ATRULE,
  Function: FUNCTION,
  Url: URL$1,
  Raw: RAW,
  ExclamationMark: 33,
  QuotationMark: 34,
  NumberSign: 35,
  DollarSign: 36,
  PercentSign: 37,
  Ampersand: 38,
  Apostrophe: 39,
  LeftParenthesis: 40,
  RightParenthesis: 41,
  Asterisk: 42,
  PlusSign: 43,
  Comma: 44,
  HyphenMinus: 45,
  FullStop: 46,
  Solidus: 47,
  Colon: 58,
  Semicolon: 59,
  LessThanSign: 60,
  EqualsSign: 61,
  GreaterThanSign: 62,
  QuestionMark: 63,
  CommercialAt: 64,
  LeftSquareBracket: 91,
  Backslash: 92,
  RightSquareBracket: 93,
  CircumflexAccent: 94,
  LowLine: 95,
  GraveAccent: 96,
  LeftCurlyBracket: 123,
  VerticalLine: 124,
  RightCurlyBracket: 125,
  Tilde: 126
};
var NAME = Object.keys(TYPE).reduce(function(result, key) {
  result[TYPE[key]] = key;
  return result;
}, {});
var SafeUint32Array = typeof Uint32Array !== "undefined" ? Uint32Array : Array;
var SYMBOL_TYPE = new SafeUint32Array(128);
var PUNCTUATION = new SafeUint32Array(128);
var STOP_URL_RAW = new SafeUint32Array(128);
for (var i$1 = 0; i$1 < SYMBOL_TYPE.length; i$1++) {
  SYMBOL_TYPE[i$1] = IDENTIFIER;
}
[
  TYPE.ExclamationMark,
  TYPE.QuotationMark,
  TYPE.NumberSign,
  TYPE.DollarSign,
  TYPE.PercentSign,
  TYPE.Ampersand,
  TYPE.Apostrophe,
  TYPE.LeftParenthesis,
  TYPE.RightParenthesis,
  TYPE.Asterisk,
  TYPE.PlusSign,
  TYPE.Comma,
  TYPE.HyphenMinus,
  TYPE.FullStop,
  TYPE.Solidus,
  TYPE.Colon,
  TYPE.Semicolon,
  TYPE.LessThanSign,
  TYPE.EqualsSign,
  TYPE.GreaterThanSign,
  TYPE.QuestionMark,
  TYPE.CommercialAt,
  TYPE.LeftSquareBracket,
  TYPE.RightSquareBracket,
  TYPE.CircumflexAccent,
  TYPE.GraveAccent,
  TYPE.LeftCurlyBracket,
  TYPE.VerticalLine,
  TYPE.RightCurlyBracket,
  TYPE.Tilde
].forEach(function(key) {
  SYMBOL_TYPE[Number(key)] = PUNCTUATOR;
  PUNCTUATION[Number(key)] = PUNCTUATOR;
});
for (var i$1 = 48; i$1 <= 57; i$1++) {
  SYMBOL_TYPE[i$1] = NUMBER;
}
SYMBOL_TYPE[SPACE] = WHITESPACE;
SYMBOL_TYPE[TAB] = WHITESPACE;
SYMBOL_TYPE[N] = WHITESPACE;
SYMBOL_TYPE[R] = WHITESPACE;
SYMBOL_TYPE[F] = WHITESPACE;
SYMBOL_TYPE[TYPE.Apostrophe] = STRING;
SYMBOL_TYPE[TYPE.QuotationMark] = STRING;
STOP_URL_RAW[SPACE] = 1;
STOP_URL_RAW[TAB] = 1;
STOP_URL_RAW[N] = 1;
STOP_URL_RAW[R] = 1;
STOP_URL_RAW[F] = 1;
STOP_URL_RAW[TYPE.Apostrophe] = 1;
STOP_URL_RAW[TYPE.QuotationMark] = 1;
STOP_URL_RAW[TYPE.LeftParenthesis] = 1;
STOP_URL_RAW[TYPE.RightParenthesis] = 1;
PUNCTUATION[SPACE] = PUNCTUATOR;
PUNCTUATION[TAB] = PUNCTUATOR;
PUNCTUATION[N] = PUNCTUATOR;
PUNCTUATION[R] = PUNCTUATOR;
PUNCTUATION[F] = PUNCTUATOR;
PUNCTUATION[TYPE.HyphenMinus] = 0;
var _const = {
  TYPE,
  NAME,
  SYMBOL_TYPE,
  PUNCTUATION,
  STOP_URL_RAW
};
var PUNCTUATION$1 = _const.PUNCTUATION;
var STOP_URL_RAW$1 = _const.STOP_URL_RAW;
var TYPE$1 = _const.TYPE;
var FULLSTOP = TYPE$1.FullStop;
var PLUSSIGN = TYPE$1.PlusSign;
var HYPHENMINUS = TYPE$1.HyphenMinus;
var PUNCTUATOR$1 = TYPE$1.Punctuator;
var TAB$1 = 9;
var N$1 = 10;
var F$1 = 12;
var R$1 = 13;
var SPACE$1 = 32;
var BACK_SLASH = 92;
var E = 101;
function firstCharOffset(source) {
  if (source.charCodeAt(0) === 65279 || source.charCodeAt(0) === 65534) {
    return 1;
  }
  return 0;
}
function isHex(code) {
  return code >= 48 && code <= 57 || code >= 65 && code <= 70 || code >= 97 && code <= 102;
}
function isNumber(code) {
  return code >= 48 && code <= 57;
}
function isNewline(source, offset2, code) {
  if (code === N$1 || code === F$1 || code === R$1) {
    if (code === R$1 && offset2 + 1 < source.length && source.charCodeAt(offset2 + 1) === N$1) {
      return 2;
    }
    return 1;
  }
  return 0;
}
function cmpChar(testStr, offset2, referenceCode) {
  var code = testStr.charCodeAt(offset2);
  if (code >= 65 && code <= 90) {
    code = code | 32;
  }
  return code === referenceCode;
}
function cmpStr(testStr, start, end, referenceStr) {
  if (end - start !== referenceStr.length) {
    return false;
  }
  if (start < 0 || end > testStr.length) {
    return false;
  }
  for (var i = start; i < end; i++) {
    var testCode = testStr.charCodeAt(i);
    var refCode = referenceStr.charCodeAt(i - start);
    if (testCode >= 65 && testCode <= 90) {
      testCode = testCode | 32;
    }
    if (testCode !== refCode) {
      return false;
    }
  }
  return true;
}
function endsWith(testStr, referenceStr) {
  return cmpStr(testStr, testStr.length - referenceStr.length, testStr.length, referenceStr);
}
function findLastNonSpaceLocation(scanner) {
  for (var i = scanner.source.length - 1; i >= 0; i--) {
    var code = scanner.source.charCodeAt(i);
    if (code !== SPACE$1 && code !== TAB$1 && code !== R$1 && code !== N$1 && code !== F$1) {
      break;
    }
  }
  return scanner.getLocation(i + 1);
}
function findWhiteSpaceEnd(source, offset2) {
  for (; offset2 < source.length; offset2++) {
    var code = source.charCodeAt(offset2);
    if (code !== SPACE$1 && code !== TAB$1 && code !== R$1 && code !== N$1 && code !== F$1) {
      break;
    }
  }
  return offset2;
}
function findCommentEnd(source, offset2) {
  var commentEnd = source.indexOf("*/", offset2);
  if (commentEnd === -1) {
    return source.length;
  }
  return commentEnd + 2;
}
function findStringEnd(source, offset2, quote) {
  for (; offset2 < source.length; offset2++) {
    var code = source.charCodeAt(offset2);
    if (code === BACK_SLASH) {
      offset2++;
    } else if (code === quote) {
      offset2++;
      break;
    }
  }
  return offset2;
}
function findDecimalNumberEnd(source, offset2) {
  for (; offset2 < source.length; offset2++) {
    var code = source.charCodeAt(offset2);
    if (code < 48 || code > 57) {
      break;
    }
  }
  return offset2;
}
function findNumberEnd(source, offset2, allowFraction) {
  var code;
  offset2 = findDecimalNumberEnd(source, offset2);
  if (allowFraction && offset2 + 1 < source.length && source.charCodeAt(offset2) === FULLSTOP) {
    code = source.charCodeAt(offset2 + 1);
    if (isNumber(code)) {
      offset2 = findDecimalNumberEnd(source, offset2 + 1);
    }
  }
  if (offset2 + 1 < source.length) {
    if ((source.charCodeAt(offset2) | 32) === E) {
      code = source.charCodeAt(offset2 + 1);
      if (code === PLUSSIGN || code === HYPHENMINUS) {
        if (offset2 + 2 < source.length) {
          code = source.charCodeAt(offset2 + 2);
        }
      }
      if (isNumber(code)) {
        offset2 = findDecimalNumberEnd(source, offset2 + 2);
      }
    }
  }
  return offset2;
}
function findEscaseEnd(source, offset2) {
  for (var i = 0; i < 7 && offset2 + i < source.length; i++) {
    var code = source.charCodeAt(offset2 + i);
    if (i !== 6 && isHex(code)) {
      continue;
    }
    if (i > 0) {
      offset2 += i - 1 + isNewline(source, offset2 + i, code);
      if (code === SPACE$1 || code === TAB$1) {
        offset2++;
      }
    }
    break;
  }
  return offset2;
}
function findIdentifierEnd(source, offset2) {
  for (; offset2 < source.length; offset2++) {
    var code = source.charCodeAt(offset2);
    if (code === BACK_SLASH) {
      offset2 = findEscaseEnd(source, offset2 + 1);
    } else if (code < 128 && PUNCTUATION$1[code] === PUNCTUATOR$1) {
      break;
    }
  }
  return offset2;
}
function findUrlRawEnd(source, offset2) {
  for (; offset2 < source.length; offset2++) {
    var code = source.charCodeAt(offset2);
    if (code === BACK_SLASH) {
      offset2 = findEscaseEnd(source, offset2 + 1);
    } else if (code < 128 && STOP_URL_RAW$1[code] === 1) {
      break;
    }
  }
  return offset2;
}
var utils = {
  firstCharOffset,
  isHex,
  isNumber,
  isNewline,
  cmpChar,
  cmpStr,
  endsWith,
  findLastNonSpaceLocation,
  findWhiteSpaceEnd,
  findCommentEnd,
  findStringEnd,
  findDecimalNumberEnd,
  findNumberEnd,
  findEscaseEnd,
  findIdentifierEnd,
  findUrlRawEnd
};
var TYPE$2 = _const.TYPE;
var NAME$1 = _const.NAME;
var SYMBOL_TYPE$1 = _const.SYMBOL_TYPE;
var firstCharOffset$1 = utils.firstCharOffset;
var cmpStr$1 = utils.cmpStr;
var isNumber$1 = utils.isNumber;
var findLastNonSpaceLocation$1 = utils.findLastNonSpaceLocation;
var findWhiteSpaceEnd$1 = utils.findWhiteSpaceEnd;
var findCommentEnd$1 = utils.findCommentEnd;
var findStringEnd$1 = utils.findStringEnd;
var findNumberEnd$1 = utils.findNumberEnd;
var findIdentifierEnd$1 = utils.findIdentifierEnd;
var findUrlRawEnd$1 = utils.findUrlRawEnd;
var NULL = 0;
var WHITESPACE$1 = TYPE$2.WhiteSpace;
var IDENTIFIER$1 = TYPE$2.Identifier;
var NUMBER$1 = TYPE$2.Number;
var STRING$1 = TYPE$2.String;
var COMMENT$1 = TYPE$2.Comment;
var PUNCTUATOR$2 = TYPE$2.Punctuator;
var CDO$1 = TYPE$2.CDO;
var CDC$1 = TYPE$2.CDC;
var ATRULE$1 = TYPE$2.Atrule;
var FUNCTION$1 = TYPE$2.Function;
var URL$2 = TYPE$2.Url;
var RAW$1 = TYPE$2.Raw;
var N$2 = 10;
var F$2 = 12;
var R$2 = 13;
var STAR = TYPE$2.Asterisk;
var SLASH = TYPE$2.Solidus;
var FULLSTOP$1 = TYPE$2.FullStop;
var PLUSSIGN$1 = TYPE$2.PlusSign;
var HYPHENMINUS$1 = TYPE$2.HyphenMinus;
var GREATERTHANSIGN = TYPE$2.GreaterThanSign;
var LESSTHANSIGN = TYPE$2.LessThanSign;
var EXCLAMATIONMARK = TYPE$2.ExclamationMark;
var COMMERCIALAT = TYPE$2.CommercialAt;
var QUOTATIONMARK = TYPE$2.QuotationMark;
var APOSTROPHE = TYPE$2.Apostrophe;
var LEFTPARENTHESIS = TYPE$2.LeftParenthesis;
var RIGHTPARENTHESIS = TYPE$2.RightParenthesis;
var LEFTCURLYBRACKET = TYPE$2.LeftCurlyBracket;
var RIGHTCURLYBRACKET = TYPE$2.RightCurlyBracket;
var LEFTSQUAREBRACKET = TYPE$2.LeftSquareBracket;
var RIGHTSQUAREBRACKET = TYPE$2.RightSquareBracket;
var MIN_BUFFER_SIZE = 16 * 1024;
var OFFSET_MASK = 16777215;
var TYPE_SHIFT = 24;
var SafeUint32Array$1 = typeof Uint32Array !== "undefined" ? Uint32Array : Array;
function computeLinesAndColumns(tokenizer3, source) {
  var sourceLength = source.length;
  var start = firstCharOffset$1(source);
  var lines = tokenizer3.lines;
  var line = tokenizer3.startLine;
  var columns = tokenizer3.columns;
  var column = tokenizer3.startColumn;
  if (lines === null || lines.length < sourceLength + 1) {
    lines = new SafeUint32Array$1(Math.max(sourceLength + 1024, MIN_BUFFER_SIZE));
    columns = new SafeUint32Array$1(lines.length);
  }
  for (var i = start; i < sourceLength; i++) {
    var code = source.charCodeAt(i);
    lines[i] = line;
    columns[i] = column++;
    if (code === N$2 || code === R$2 || code === F$2) {
      if (code === R$2 && i + 1 < sourceLength && source.charCodeAt(i + 1) === N$2) {
        i++;
        lines[i] = line;
        columns[i] = column;
      }
      line++;
      column = 1;
    }
  }
  lines[i] = line;
  columns[i] = column;
  tokenizer3.linesAnsColumnsComputed = true;
  tokenizer3.lines = lines;
  tokenizer3.columns = columns;
}
function tokenLayout(tokenizer3, source, startPos) {
  var sourceLength = source.length;
  var offsetAndType = tokenizer3.offsetAndType;
  var balance = tokenizer3.balance;
  var tokenCount = 0;
  var prevType = 0;
  var offset2 = startPos;
  var anchor = 0;
  var balanceCloseCode = 0;
  var balanceStart = 0;
  var balancePrev = 0;
  if (offsetAndType === null || offsetAndType.length < sourceLength + 1) {
    offsetAndType = new SafeUint32Array$1(sourceLength + 1024);
    balance = new SafeUint32Array$1(sourceLength + 1024);
  }
  while (offset2 < sourceLength) {
    var code = source.charCodeAt(offset2);
    var type = code < 128 ? SYMBOL_TYPE$1[code] : IDENTIFIER$1;
    balance[tokenCount] = sourceLength;
    switch (type) {
      case WHITESPACE$1:
        offset2 = findWhiteSpaceEnd$1(source, offset2 + 1);
        break;
      case PUNCTUATOR$2:
        switch (code) {
          case balanceCloseCode:
            balancePrev = balanceStart & OFFSET_MASK;
            balanceStart = balance[balancePrev];
            balanceCloseCode = balanceStart >> TYPE_SHIFT;
            balance[tokenCount] = balancePrev;
            balance[balancePrev++] = tokenCount;
            for (; balancePrev < tokenCount; balancePrev++) {
              if (balance[balancePrev] === sourceLength) {
                balance[balancePrev] = tokenCount;
              }
            }
            break;
          case LEFTSQUAREBRACKET:
            balance[tokenCount] = balanceStart;
            balanceCloseCode = RIGHTSQUAREBRACKET;
            balanceStart = balanceCloseCode << TYPE_SHIFT | tokenCount;
            break;
          case LEFTCURLYBRACKET:
            balance[tokenCount] = balanceStart;
            balanceCloseCode = RIGHTCURLYBRACKET;
            balanceStart = balanceCloseCode << TYPE_SHIFT | tokenCount;
            break;
          case LEFTPARENTHESIS:
            balance[tokenCount] = balanceStart;
            balanceCloseCode = RIGHTPARENTHESIS;
            balanceStart = balanceCloseCode << TYPE_SHIFT | tokenCount;
            break;
        }
        if (code === STAR && prevType === SLASH) {
          type = COMMENT$1;
          offset2 = findCommentEnd$1(source, offset2 + 1);
          tokenCount--;
          break;
        }
        if (code === FULLSTOP$1 && (prevType === PLUSSIGN$1 || prevType === HYPHENMINUS$1)) {
          if (offset2 + 1 < sourceLength && isNumber$1(source.charCodeAt(offset2 + 1))) {
            type = NUMBER$1;
            offset2 = findNumberEnd$1(source, offset2 + 2, false);
            tokenCount--;
            break;
          }
        }
        if (code === EXCLAMATIONMARK && prevType === LESSTHANSIGN) {
          if (offset2 + 2 < sourceLength && source.charCodeAt(offset2 + 1) === HYPHENMINUS$1 && source.charCodeAt(offset2 + 2) === HYPHENMINUS$1) {
            type = CDO$1;
            offset2 = offset2 + 3;
            tokenCount--;
            break;
          }
        }
        if (code === HYPHENMINUS$1 && prevType === HYPHENMINUS$1) {
          if (offset2 + 1 < sourceLength && source.charCodeAt(offset2 + 1) === GREATERTHANSIGN) {
            type = CDC$1;
            offset2 = offset2 + 2;
            tokenCount--;
            break;
          }
        }
        if (code === LEFTPARENTHESIS && prevType === IDENTIFIER$1) {
          offset2 = offset2 + 1;
          tokenCount--;
          balance[tokenCount] = balance[tokenCount + 1];
          balanceStart--;
          if (offset2 - anchor === 4 && cmpStr$1(source, anchor, offset2, "url(")) {
            anchor = findWhiteSpaceEnd$1(source, offset2);
            code = source.charCodeAt(anchor);
            if (code !== LEFTPARENTHESIS && code !== RIGHTPARENTHESIS && code !== QUOTATIONMARK && code !== APOSTROPHE) {
              offsetAndType[tokenCount++] = URL$2 << TYPE_SHIFT | offset2;
              balance[tokenCount] = sourceLength;
              if (anchor !== offset2) {
                offsetAndType[tokenCount++] = WHITESPACE$1 << TYPE_SHIFT | anchor;
                balance[tokenCount] = sourceLength;
              }
              type = RAW$1;
              offset2 = findUrlRawEnd$1(source, anchor);
            } else {
              type = URL$2;
            }
          } else {
            type = FUNCTION$1;
          }
          break;
        }
        type = code;
        offset2 = offset2 + 1;
        break;
      case NUMBER$1:
        offset2 = findNumberEnd$1(source, offset2 + 1, prevType !== FULLSTOP$1);
        if (prevType === FULLSTOP$1 || prevType === HYPHENMINUS$1 || prevType === PLUSSIGN$1) {
          tokenCount--;
        }
        break;
      case STRING$1:
        offset2 = findStringEnd$1(source, offset2 + 1, code);
        break;
      default:
        anchor = offset2;
        offset2 = findIdentifierEnd$1(source, offset2);
        if (prevType === HYPHENMINUS$1) {
          tokenCount--;
          prevType = tokenCount === 0 ? 0 : offsetAndType[tokenCount - 1] >> TYPE_SHIFT;
        }
        if (prevType === COMMERCIALAT) {
          tokenCount--;
          type = ATRULE$1;
        }
    }
    offsetAndType[tokenCount++] = type << TYPE_SHIFT | offset2;
    prevType = type;
  }
  offsetAndType[tokenCount] = offset2;
  balance[tokenCount] = sourceLength;
  while (balanceStart !== 0) {
    balancePrev = balanceStart & OFFSET_MASK;
    balanceStart = balance[balancePrev];
    balance[balancePrev] = sourceLength;
  }
  tokenizer3.offsetAndType = offsetAndType;
  tokenizer3.tokenCount = tokenCount;
  tokenizer3.balance = balance;
}
var Tokenizer = function(source, startOffset, startLine, startColumn) {
  this.offsetAndType = null;
  this.balance = null;
  this.lines = null;
  this.columns = null;
  this.setSource(source, startOffset, startLine, startColumn);
};
Tokenizer.prototype = {
  setSource: function(source, startOffset, startLine, startColumn) {
    var safeSource = String(source || "");
    var start = firstCharOffset$1(safeSource);
    this.source = safeSource;
    this.firstCharOffset = start;
    this.startOffset = typeof startOffset === "undefined" ? 0 : startOffset;
    this.startLine = typeof startLine === "undefined" ? 1 : startLine;
    this.startColumn = typeof startColumn === "undefined" ? 1 : startColumn;
    this.linesAnsColumnsComputed = false;
    this.eof = false;
    this.currentToken = -1;
    this.tokenType = 0;
    this.tokenStart = start;
    this.tokenEnd = start;
    tokenLayout(this, safeSource, start);
    this.next();
  },
  lookupType: function(offset2) {
    offset2 += this.currentToken;
    if (offset2 < this.tokenCount) {
      return this.offsetAndType[offset2] >> TYPE_SHIFT;
    }
    return NULL;
  },
  lookupNonWSType: function(offset2) {
    offset2 += this.currentToken;
    for (var type; offset2 < this.tokenCount; offset2++) {
      type = this.offsetAndType[offset2] >> TYPE_SHIFT;
      if (type !== WHITESPACE$1) {
        return type;
      }
    }
    return NULL;
  },
  lookupValue: function(offset2, referenceStr) {
    offset2 += this.currentToken;
    if (offset2 < this.tokenCount) {
      return cmpStr$1(this.source, this.offsetAndType[offset2 - 1] & OFFSET_MASK, this.offsetAndType[offset2] & OFFSET_MASK, referenceStr);
    }
    return false;
  },
  getTokenStart: function(tokenNum) {
    if (tokenNum === this.currentToken) {
      return this.tokenStart;
    }
    if (tokenNum > 0) {
      return tokenNum < this.tokenCount ? this.offsetAndType[tokenNum - 1] & OFFSET_MASK : this.offsetAndType[this.tokenCount] & OFFSET_MASK;
    }
    return this.firstCharOffset;
  },
  getOffsetExcludeWS: function() {
    if (this.currentToken > 0) {
      if (this.offsetAndType[this.currentToken - 1] >> TYPE_SHIFT === WHITESPACE$1) {
        return this.currentToken > 1 ? this.offsetAndType[this.currentToken - 2] & OFFSET_MASK : this.firstCharOffset;
      }
    }
    return this.tokenStart;
  },
  getRawLength: function(startToken, endTokenType1, endTokenType2, includeTokenType2) {
    var cursor = startToken;
    var balanceEnd;
    loop:
      for (; cursor < this.tokenCount; cursor++) {
        balanceEnd = this.balance[cursor];
        if (balanceEnd < startToken) {
          break loop;
        }
        switch (this.offsetAndType[cursor] >> TYPE_SHIFT) {
          case endTokenType1:
            break loop;
          case endTokenType2:
            if (includeTokenType2) {
              cursor++;
            }
            break loop;
          default:
            if (this.balance[balanceEnd] === cursor) {
              cursor = balanceEnd;
            }
        }
      }
    return cursor - this.currentToken;
  },
  getTokenValue: function() {
    return this.source.substring(this.tokenStart, this.tokenEnd);
  },
  substrToCursor: function(start) {
    return this.source.substring(start, this.tokenStart);
  },
  skipWS: function() {
    for (var i = this.currentToken, skipTokenCount = 0; i < this.tokenCount; i++, skipTokenCount++) {
      if (this.offsetAndType[i] >> TYPE_SHIFT !== WHITESPACE$1) {
        break;
      }
    }
    if (skipTokenCount > 0) {
      this.skip(skipTokenCount);
    }
  },
  skipSC: function() {
    while (this.tokenType === WHITESPACE$1 || this.tokenType === COMMENT$1) {
      this.next();
    }
  },
  skip: function(tokenCount) {
    var next = this.currentToken + tokenCount;
    if (next < this.tokenCount) {
      this.currentToken = next;
      this.tokenStart = this.offsetAndType[next - 1] & OFFSET_MASK;
      next = this.offsetAndType[next];
      this.tokenType = next >> TYPE_SHIFT;
      this.tokenEnd = next & OFFSET_MASK;
    } else {
      this.currentToken = this.tokenCount;
      this.next();
    }
  },
  next: function() {
    var next = this.currentToken + 1;
    if (next < this.tokenCount) {
      this.currentToken = next;
      this.tokenStart = this.tokenEnd;
      next = this.offsetAndType[next];
      this.tokenType = next >> TYPE_SHIFT;
      this.tokenEnd = next & OFFSET_MASK;
    } else {
      this.currentToken = this.tokenCount;
      this.eof = true;
      this.tokenType = NULL;
      this.tokenStart = this.tokenEnd = this.source.length;
    }
  },
  eat: function(tokenType) {
    if (this.tokenType !== tokenType) {
      var offset2 = this.tokenStart;
      var message = NAME$1[tokenType] + " is expected";
      if (tokenType === IDENTIFIER$1) {
        if (this.tokenType === FUNCTION$1 || this.tokenType === URL$2) {
          offset2 = this.tokenEnd - 1;
          message += " but function found";
        }
      } else {
        if (this.source.charCodeAt(this.tokenStart) === tokenType) {
          offset2 = offset2 + 1;
        }
      }
      this.error(message, offset2);
    }
    this.next();
  },
  eatNonWS: function(tokenType) {
    this.skipWS();
    this.eat(tokenType);
  },
  consume: function(tokenType) {
    var value2 = this.getTokenValue();
    this.eat(tokenType);
    return value2;
  },
  consumeFunctionName: function() {
    var name = this.source.substring(this.tokenStart, this.tokenEnd - 1);
    this.eat(FUNCTION$1);
    return name;
  },
  consumeNonWS: function(tokenType) {
    this.skipWS();
    return this.consume(tokenType);
  },
  expectIdentifier: function(name) {
    if (this.tokenType !== IDENTIFIER$1 || cmpStr$1(this.source, this.tokenStart, this.tokenEnd, name) === false) {
      this.error("Identifier `" + name + "` is expected");
    }
    this.next();
  },
  getLocation: function(offset2, filename) {
    if (!this.linesAnsColumnsComputed) {
      computeLinesAndColumns(this, this.source);
    }
    return {
      source: filename,
      offset: this.startOffset + offset2,
      line: this.lines[offset2],
      column: this.columns[offset2]
    };
  },
  getLocationRange: function(start, end, filename) {
    if (!this.linesAnsColumnsComputed) {
      computeLinesAndColumns(this, this.source);
    }
    return {
      source: filename,
      start: {
        offset: this.startOffset + start,
        line: this.lines[start],
        column: this.columns[start]
      },
      end: {
        offset: this.startOffset + end,
        line: this.lines[end],
        column: this.columns[end]
      }
    };
  },
  error: function(message, offset2) {
    var location = typeof offset2 !== "undefined" && offset2 < this.source.length ? this.getLocation(offset2) : this.eof ? findLastNonSpaceLocation$1(this) : this.getLocation(this.tokenStart);
    throw new error(message || "Unexpected input", this.source, location.offset, location.line, location.column);
  },
  dump: function() {
    var offset2 = 0;
    return Array.prototype.slice.call(this.offsetAndType, 0, this.tokenCount).map(function(item, idx) {
      var start = offset2;
      var end = item & OFFSET_MASK;
      offset2 = end;
      return {
        idx,
        type: NAME$1[item >> TYPE_SHIFT],
        chunk: this.source.substring(start, end),
        balance: this.balance[idx]
      };
    }, this);
  }
};
Tokenizer.CssSyntaxError = error;
Object.keys(_const).forEach(function(key) {
  Tokenizer[key] = _const[key];
});
Object.keys(utils).forEach(function(key) {
  Tokenizer[key] = utils[key];
});
new Tokenizer(`
\r\r
\f<!---->//""''/*\r
\f*/1a;.\\31	+2{url(a);func();+1.2e3 -.4e-5 .6e+7}`).getLocation();
var Tokenizer_1 = Tokenizer;
var tokenizer2 = Tokenizer_1;
function createItem(data2) {
  return {
    prev: null,
    next: null,
    data: data2
  };
}
var cursors = null;
var List = function() {
  this.cursor = null;
  this.head = null;
  this.tail = null;
};
List.createItem = createItem;
List.prototype.createItem = createItem;
List.prototype.getSize = function() {
  var size = 0;
  var cursor = this.head;
  while (cursor) {
    size++;
    cursor = cursor.next;
  }
  return size;
};
List.prototype.fromArray = function(array) {
  var cursor = null;
  this.head = null;
  for (var i = 0; i < array.length; i++) {
    var item = createItem(array[i]);
    if (cursor !== null) {
      cursor.next = item;
    } else {
      this.head = item;
    }
    item.prev = cursor;
    cursor = item;
  }
  this.tail = cursor;
  return this;
};
List.prototype.toArray = function() {
  var cursor = this.head;
  var result = [];
  while (cursor) {
    result.push(cursor.data);
    cursor = cursor.next;
  }
  return result;
};
List.prototype.toJSON = List.prototype.toArray;
List.prototype.isEmpty = function() {
  return this.head === null;
};
List.prototype.first = function() {
  return this.head && this.head.data;
};
List.prototype.last = function() {
  return this.tail && this.tail.data;
};
function allocateCursor(node2, prev, next) {
  var cursor;
  if (cursors !== null) {
    cursor = cursors;
    cursors = cursors.cursor;
    cursor.prev = prev;
    cursor.next = next;
    cursor.cursor = node2.cursor;
  } else {
    cursor = {
      prev,
      next,
      cursor: node2.cursor
    };
  }
  node2.cursor = cursor;
  return cursor;
}
function releaseCursor(node2) {
  var cursor = node2.cursor;
  node2.cursor = cursor.cursor;
  cursor.prev = null;
  cursor.next = null;
  cursor.cursor = cursors;
  cursors = cursor;
}
List.prototype.each = function(fn, context2) {
  var item;
  if (context2 === void 0) {
    context2 = this;
  }
  var cursor = allocateCursor(this, null, this.head);
  while (cursor.next !== null) {
    item = cursor.next;
    cursor.next = item.next;
    fn.call(context2, item.data, item, this);
  }
  releaseCursor(this);
};
List.prototype.eachRight = function(fn, context2) {
  var item;
  if (context2 === void 0) {
    context2 = this;
  }
  var cursor = allocateCursor(this, this.tail, null);
  while (cursor.prev !== null) {
    item = cursor.prev;
    cursor.prev = item.prev;
    fn.call(context2, item.data, item, this);
  }
  releaseCursor(this);
};
List.prototype.nextUntil = function(start, fn, context2) {
  if (start === null) {
    return;
  }
  var item;
  if (context2 === void 0) {
    context2 = this;
  }
  var cursor = allocateCursor(this, null, start);
  while (cursor.next !== null) {
    item = cursor.next;
    cursor.next = item.next;
    if (fn.call(context2, item.data, item, this)) {
      break;
    }
  }
  releaseCursor(this);
};
List.prototype.prevUntil = function(start, fn, context2) {
  if (start === null) {
    return;
  }
  var item;
  if (context2 === void 0) {
    context2 = this;
  }
  var cursor = allocateCursor(this, start, null);
  while (cursor.prev !== null) {
    item = cursor.prev;
    cursor.prev = item.prev;
    if (fn.call(context2, item.data, item, this)) {
      break;
    }
  }
  releaseCursor(this);
};
List.prototype.some = function(fn, context2) {
  var cursor = this.head;
  if (context2 === void 0) {
    context2 = this;
  }
  while (cursor !== null) {
    if (fn.call(context2, cursor.data, cursor, this)) {
      return true;
    }
    cursor = cursor.next;
  }
  return false;
};
List.prototype.map = function(fn, context2) {
  var result = [];
  var cursor = this.head;
  if (context2 === void 0) {
    context2 = this;
  }
  while (cursor !== null) {
    result.push(fn.call(context2, cursor.data, cursor, this));
    cursor = cursor.next;
  }
  return result;
};
List.prototype.clear = function() {
  this.head = null;
  this.tail = null;
};
List.prototype.copy = function() {
  var result = new List();
  var cursor = this.head;
  while (cursor !== null) {
    result.insert(createItem(cursor.data));
    cursor = cursor.next;
  }
  return result;
};
List.prototype.updateCursors = function(prevOld, prevNew, nextOld, nextNew) {
  var cursor = this.cursor;
  while (cursor !== null) {
    if (cursor.prev === prevOld) {
      cursor.prev = prevNew;
    }
    if (cursor.next === nextOld) {
      cursor.next = nextNew;
    }
    cursor = cursor.cursor;
  }
};
List.prototype.prepend = function(item) {
  this.updateCursors(null, item, this.head, item);
  if (this.head !== null) {
    this.head.prev = item;
    item.next = this.head;
  } else {
    this.tail = item;
  }
  this.head = item;
  return this;
};
List.prototype.prependData = function(data2) {
  return this.prepend(createItem(data2));
};
List.prototype.append = function(item) {
  this.updateCursors(this.tail, item, null, item);
  if (this.tail !== null) {
    this.tail.next = item;
    item.prev = this.tail;
  } else {
    this.head = item;
  }
  this.tail = item;
  return this;
};
List.prototype.appendData = function(data2) {
  return this.append(createItem(data2));
};
List.prototype.insert = function(item, before) {
  if (before !== void 0 && before !== null) {
    this.updateCursors(before.prev, item, before, item);
    if (before.prev === null) {
      if (this.head !== before) {
        throw new Error("before doesn't belong to list");
      }
      this.head = item;
      before.prev = item;
      item.next = before;
      this.updateCursors(null, item);
    } else {
      before.prev.next = item;
      item.prev = before.prev;
      before.prev = item;
      item.next = before;
    }
  } else {
    this.append(item);
  }
};
List.prototype.insertData = function(data2, before) {
  this.insert(createItem(data2), before);
};
List.prototype.remove = function(item) {
  this.updateCursors(item, item.prev, item, item.next);
  if (item.prev !== null) {
    item.prev.next = item.next;
  } else {
    if (this.head !== item) {
      throw new Error("item doesn't belong to list");
    }
    this.head = item.next;
  }
  if (item.next !== null) {
    item.next.prev = item.prev;
  } else {
    if (this.tail !== item) {
      throw new Error("item doesn't belong to list");
    }
    this.tail = item.prev;
  }
  item.prev = null;
  item.next = null;
  return item;
};
List.prototype.appendList = function(list2) {
  if (list2.head === null) {
    return;
  }
  this.updateCursors(this.tail, list2.tail, null, list2.head);
  if (this.tail !== null) {
    this.tail.next = list2.head;
    list2.head.prev = this.tail;
  } else {
    this.head = list2.head;
  }
  this.tail = list2.tail;
  list2.head = null;
  list2.tail = null;
};
List.prototype.insertList = function(list2, before) {
  if (before !== void 0 && before !== null) {
    if (list2.head === null) {
      return;
    }
    this.updateCursors(before.prev, list2.tail, before, list2.head);
    if (before.prev !== null) {
      before.prev.next = list2.head;
      list2.head.prev = before.prev;
    } else {
      this.head = list2.head;
    }
    before.prev = list2.tail;
    list2.tail.next = before;
    list2.head = null;
    list2.tail = null;
  } else {
    this.appendList(list2);
  }
};
List.prototype.replace = function(oldItem, newItemOrList) {
  if ("head" in newItemOrList) {
    this.insertList(newItemOrList, oldItem);
  } else {
    this.insert(newItemOrList, oldItem);
  }
  this.remove(oldItem);
};
var list = List;
var TYPE$3 = tokenizer2.TYPE;
var WHITESPACE$2 = TYPE$3.WhiteSpace;
var COMMENT$2 = TYPE$3.Comment;
var sequence = function readSequence(recognizer) {
  var children = new list();
  var child = null;
  var context2 = {
    recognizer,
    space: null,
    ignoreWS: false,
    ignoreWSAfter: false
  };
  this.scanner.skipSC();
  while (!this.scanner.eof) {
    switch (this.scanner.tokenType) {
      case COMMENT$2:
        this.scanner.next();
        continue;
      case WHITESPACE$2:
        if (context2.ignoreWS) {
          this.scanner.next();
        } else {
          context2.space = this.WhiteSpace();
        }
        continue;
    }
    child = recognizer.getNode.call(this, context2);
    if (child === void 0) {
      break;
    }
    if (context2.space !== null) {
      children.appendData(context2.space);
      context2.space = null;
    }
    children.appendData(child);
    if (context2.ignoreWSAfter) {
      context2.ignoreWSAfter = false;
      context2.ignoreWS = true;
    } else {
      context2.ignoreWS = false;
    }
  }
  return children;
};
var noop = function() {
};
function createParseContext(name) {
  return function() {
    return this[name]();
  };
}
function processConfig(config) {
  var parserConfig = {
    context: {},
    scope: {},
    atrule: {},
    pseudo: {}
  };
  if (config.parseContext) {
    for (var name in config.parseContext) {
      switch (typeof config.parseContext[name]) {
        case "function":
          parserConfig.context[name] = config.parseContext[name];
          break;
        case "string":
          parserConfig.context[name] = createParseContext(config.parseContext[name]);
          break;
      }
    }
  }
  if (config.scope) {
    for (var name in config.scope) {
      parserConfig.scope[name] = config.scope[name];
    }
  }
  if (config.atrule) {
    for (var name in config.atrule) {
      var atrule2 = config.atrule[name];
      if (atrule2.parse) {
        parserConfig.atrule[name] = atrule2.parse;
      }
    }
  }
  if (config.pseudo) {
    for (var name in config.pseudo) {
      var pseudo2 = config.pseudo[name];
      if (pseudo2.parse) {
        parserConfig.pseudo[name] = pseudo2.parse;
      }
    }
  }
  if (config.node) {
    for (var name in config.node) {
      parserConfig[name] = config.node[name].parse;
    }
  }
  return parserConfig;
}
var create = function createParser(config) {
  var parser2 = {
    scanner: new tokenizer2(),
    filename: "<unknown>",
    needPositions: false,
    tolerant: false,
    onParseError: noop,
    parseAtruleExpression: true,
    parseSelector: true,
    parseValue: true,
    parseCustomProperty: false,
    readSequence: sequence,
    tolerantParse: function(consumer, fallback) {
      if (this.tolerant) {
        var start = this.scanner.currentToken;
        try {
          return consumer.call(this);
        } catch (e) {
          this.onParseError(e);
          return fallback.call(this, start);
        }
      } else {
        return consumer.call(this);
      }
    },
    getLocation: function(start, end) {
      if (this.needPositions) {
        return this.scanner.getLocationRange(start, end, this.filename);
      }
      return null;
    },
    getLocationFromList: function(list2) {
      if (this.needPositions) {
        return this.scanner.getLocationRange(list2.head !== null ? list2.first().loc.start.offset - this.scanner.startOffset : this.scanner.tokenStart, list2.head !== null ? list2.last().loc.end.offset - this.scanner.startOffset : this.scanner.tokenStart, this.filename);
      }
      return null;
    }
  };
  config = processConfig(config || {});
  for (var key in config) {
    parser2[key] = config[key];
  }
  return function(source, options) {
    options = options || {};
    var context2 = options.context || "default";
    var ast;
    parser2.scanner.setSource(source, options.offset, options.line, options.column);
    parser2.filename = options.filename || "<unknown>";
    parser2.needPositions = Boolean(options.positions);
    parser2.tolerant = Boolean(options.tolerant);
    parser2.onParseError = typeof options.onParseError === "function" ? options.onParseError : noop;
    parser2.parseAtruleExpression = "parseAtruleExpression" in options ? Boolean(options.parseAtruleExpression) : true;
    parser2.parseSelector = "parseSelector" in options ? Boolean(options.parseSelector) : true;
    parser2.parseValue = "parseValue" in options ? Boolean(options.parseValue) : true;
    parser2.parseCustomProperty = "parseCustomProperty" in options ? Boolean(options.parseCustomProperty) : false;
    if (!parser2.context.hasOwnProperty(context2)) {
      throw new Error("Unknown context `" + context2 + "`");
    }
    ast = parser2.context[context2].call(parser2, options);
    if (!parser2.scanner.eof) {
      parser2.scanner.error();
    }
    return ast;
  };
};
var cmpChar$1 = tokenizer2.cmpChar;
var TYPE$4 = tokenizer2.TYPE;
var IDENTIFIER$2 = TYPE$4.Identifier;
var STRING$2 = TYPE$4.String;
var NUMBER$2 = TYPE$4.Number;
var FUNCTION$2 = TYPE$4.Function;
var URL$3 = TYPE$4.Url;
var NUMBERSIGN = TYPE$4.NumberSign;
var LEFTPARENTHESIS$1 = TYPE$4.LeftParenthesis;
var LEFTSQUAREBRACKET$1 = TYPE$4.LeftSquareBracket;
var PLUSSIGN$2 = TYPE$4.PlusSign;
var HYPHENMINUS$2 = TYPE$4.HyphenMinus;
var COMMA = TYPE$4.Comma;
var SOLIDUS = TYPE$4.Solidus;
var ASTERISK = TYPE$4.Asterisk;
var PERCENTSIGN = TYPE$4.PercentSign;
var BACKSLASH = TYPE$4.Backslash;
var U = 117;
var _default = function defaultRecognizer(context2) {
  switch (this.scanner.tokenType) {
    case NUMBERSIGN:
      return this.HexColor();
    case COMMA:
      context2.space = null;
      context2.ignoreWSAfter = true;
      return this.Operator();
    case SOLIDUS:
    case ASTERISK:
    case PLUSSIGN$2:
    case HYPHENMINUS$2:
      return this.Operator();
    case LEFTPARENTHESIS$1:
      return this.Parentheses(this.readSequence, context2.recognizer);
    case LEFTSQUAREBRACKET$1:
      return this.Brackets(this.readSequence, context2.recognizer);
    case STRING$2:
      return this.String();
    case NUMBER$2:
      switch (this.scanner.lookupType(1)) {
        case PERCENTSIGN:
          return this.Percentage();
        case IDENTIFIER$2:
          if (cmpChar$1(this.scanner.source, this.scanner.tokenEnd, BACKSLASH)) {
            return this.Number();
          } else {
            return this.Dimension();
          }
        default:
          return this.Number();
      }
    case FUNCTION$2:
      return this.Function(this.readSequence, context2.recognizer);
    case URL$3:
      return this.Url();
    case IDENTIFIER$2:
      if (cmpChar$1(this.scanner.source, this.scanner.tokenStart, U) && cmpChar$1(this.scanner.source, this.scanner.tokenStart + 1, PLUSSIGN$2)) {
        return this.UnicodeRange();
      } else {
        return this.Identifier();
      }
  }
};
var atruleExpression = {
  getNode: _default
};
var TYPE$5 = tokenizer2.TYPE;
var IDENTIFIER$3 = TYPE$5.Identifier;
var NUMBER$3 = TYPE$5.Number;
var NUMBERSIGN$1 = TYPE$5.NumberSign;
var LEFTSQUAREBRACKET$2 = TYPE$5.LeftSquareBracket;
var PLUSSIGN$3 = TYPE$5.PlusSign;
var SOLIDUS$1 = TYPE$5.Solidus;
var ASTERISK$1 = TYPE$5.Asterisk;
var FULLSTOP$2 = TYPE$5.FullStop;
var COLON = TYPE$5.Colon;
var GREATERTHANSIGN$1 = TYPE$5.GreaterThanSign;
var VERTICALLINE = TYPE$5.VerticalLine;
var TILDE = TYPE$5.Tilde;
function getNode(context2) {
  switch (this.scanner.tokenType) {
    case PLUSSIGN$3:
    case GREATERTHANSIGN$1:
    case TILDE:
      context2.space = null;
      context2.ignoreWSAfter = true;
      return this.Combinator();
    case SOLIDUS$1:
      return this.Combinator();
    case FULLSTOP$2:
      return this.ClassSelector();
    case LEFTSQUAREBRACKET$2:
      return this.AttributeSelector();
    case NUMBERSIGN$1:
      return this.IdSelector();
    case COLON:
      if (this.scanner.lookupType(1) === COLON) {
        return this.PseudoElementSelector();
      } else {
        return this.PseudoClassSelector();
      }
    case IDENTIFIER$3:
    case ASTERISK$1:
    case VERTICALLINE:
      return this.TypeSelector();
    case NUMBER$3:
      return this.Percentage();
  }
}
var selector = {
  getNode
};
var element = function() {
  this.scanner.skipSC();
  var id2 = this.IdSelector();
  this.scanner.skipSC();
  return new list().appendData(id2);
};
var expression = function() {
  return new list().appendData(this.Raw(this.scanner.currentToken, 0, 0, false, false));
};
var TYPE$6 = tokenizer2.TYPE;
var IDENTIFIER$4 = TYPE$6.Identifier;
var COMMA$1 = TYPE$6.Comma;
var SEMICOLON = TYPE$6.Semicolon;
var HYPHENMINUS$3 = TYPE$6.HyphenMinus;
var EXCLAMATIONMARK$1 = TYPE$6.ExclamationMark;
var _var = function() {
  var children = new list();
  this.scanner.skipSC();
  var identStart = this.scanner.tokenStart;
  this.scanner.eat(HYPHENMINUS$3);
  if (this.scanner.source.charCodeAt(this.scanner.tokenStart) !== HYPHENMINUS$3) {
    this.scanner.error("HyphenMinus is expected");
  }
  this.scanner.eat(IDENTIFIER$4);
  children.appendData({
    type: "Identifier",
    loc: this.getLocation(identStart, this.scanner.tokenStart),
    name: this.scanner.substrToCursor(identStart)
  });
  this.scanner.skipSC();
  if (this.scanner.tokenType === COMMA$1) {
    children.appendData(this.Operator());
    children.appendData(this.parseCustomProperty ? this.Value(null) : this.Raw(this.scanner.currentToken, EXCLAMATIONMARK$1, SEMICOLON, false, false));
  }
  return children;
};
var value = {
  getNode: _default,
  "-moz-element": element,
  element,
  expression,
  var: _var
};
var scope = {
  AtruleExpression: atruleExpression,
  Selector: selector,
  Value: value
};
var fontFace = {
  parse: {
    expression: null,
    block: function() {
      return this.Block(this.Declaration);
    }
  }
};
var TYPE$7 = tokenizer2.TYPE;
var STRING$3 = TYPE$7.String;
var IDENTIFIER$5 = TYPE$7.Identifier;
var URL$4 = TYPE$7.Url;
var LEFTPARENTHESIS$2 = TYPE$7.LeftParenthesis;
var _import = {
  parse: {
    expression: function() {
      var children = new list();
      this.scanner.skipSC();
      switch (this.scanner.tokenType) {
        case STRING$3:
          children.appendData(this.String());
          break;
        case URL$4:
          children.appendData(this.Url());
          break;
        default:
          this.scanner.error("String or url() is expected");
      }
      if (this.scanner.lookupNonWSType(0) === IDENTIFIER$5 || this.scanner.lookupNonWSType(0) === LEFTPARENTHESIS$2) {
        children.appendData(this.WhiteSpace());
        children.appendData(this.MediaQueryList());
      }
      return children;
    },
    block: null
  }
};
var media = {
  parse: {
    expression: function() {
      return new list().appendData(this.MediaQueryList());
    },
    block: function() {
      return this.Block(this.Rule);
    }
  }
};
var TYPE$8 = tokenizer2.TYPE;
var LEFTCURLYBRACKET$1 = TYPE$8.LeftCurlyBracket;
var page = {
  parse: {
    expression: function() {
      if (this.scanner.lookupNonWSType(0) === LEFTCURLYBRACKET$1) {
        return null;
      }
      return new list().appendData(this.SelectorList());
    },
    block: function() {
      return this.Block(this.Declaration);
    }
  }
};
var TYPE$9 = tokenizer2.TYPE;
var WHITESPACE$3 = TYPE$9.WhiteSpace;
var COMMENT$3 = TYPE$9.Comment;
var IDENTIFIER$6 = TYPE$9.Identifier;
var FUNCTION$3 = TYPE$9.Function;
var LEFTPARENTHESIS$3 = TYPE$9.LeftParenthesis;
var HYPHENMINUS$4 = TYPE$9.HyphenMinus;
var COLON$1 = TYPE$9.Colon;
function consumeRaw() {
  return new list().appendData(this.Raw(this.scanner.currentToken, 0, 0, false, false));
}
function parentheses() {
  var index = 0;
  this.scanner.skipSC();
  if (this.scanner.tokenType === IDENTIFIER$6) {
    index = 1;
  } else if (this.scanner.tokenType === HYPHENMINUS$4 && this.scanner.lookupType(1) === IDENTIFIER$6) {
    index = 2;
  }
  if (index !== 0 && this.scanner.lookupNonWSType(index) === COLON$1) {
    return new list().appendData(this.Declaration());
  }
  return readSequence2.call(this);
}
function readSequence2() {
  var children = new list();
  var space = null;
  var child;
  this.scanner.skipSC();
  scan:
    while (!this.scanner.eof) {
      switch (this.scanner.tokenType) {
        case WHITESPACE$3:
          space = this.WhiteSpace();
          continue;
        case COMMENT$3:
          this.scanner.next();
          continue;
        case FUNCTION$3:
          child = this.Function(consumeRaw, this.scope.AtruleExpression);
          break;
        case IDENTIFIER$6:
          child = this.Identifier();
          break;
        case LEFTPARENTHESIS$3:
          child = this.Parentheses(parentheses, this.scope.AtruleExpression);
          break;
        default:
          break scan;
      }
      if (space !== null) {
        children.appendData(space);
        space = null;
      }
      children.appendData(child);
    }
  return children;
}
var supports = {
  parse: {
    expression: function() {
      var children = readSequence2.call(this);
      if (children.isEmpty()) {
        this.scanner.error("Condition is expected");
      }
      return children;
    },
    block: function() {
      return this.Block(this.Rule);
    }
  }
};
var atrule = {
  "font-face": fontFace,
  import: _import,
  media,
  page,
  supports
};
var dir = {
  parse: function() {
    return new list().appendData(this.Identifier());
  }
};
var has$1 = {
  parse: function() {
    return new list().appendData(this.SelectorList());
  }
};
var lang = {
  parse: function() {
    return new list().appendData(this.Identifier());
  }
};
var selectorList = {
  parse: function selectorList2() {
    return new list().appendData(this.SelectorList());
  }
};
var matches = selectorList;
var not = selectorList;
var ALLOW_OF_CLAUSE = true;
var nthWithOfClause = {
  parse: function() {
    return new list().appendData(this.Nth(ALLOW_OF_CLAUSE));
  }
};
var nthChild = nthWithOfClause;
var nthLastChild = nthWithOfClause;
var DISALLOW_OF_CLAUSE = false;
var nth = {
  parse: function nth2() {
    return new list().appendData(this.Nth(DISALLOW_OF_CLAUSE));
  }
};
var nthLastOfType = nth;
var nthOfType = nth;
var slotted = {
  parse: function compoundSelector() {
    return new list().appendData(this.Selector());
  }
};
var pseudo = {
  dir,
  has: has$1,
  lang,
  matches,
  not,
  "nth-child": nthChild,
  "nth-last-child": nthLastChild,
  "nth-last-of-type": nthLastOfType,
  "nth-of-type": nthOfType,
  slotted
};
var cmpChar$2 = tokenizer2.cmpChar;
var isNumber$2 = tokenizer2.isNumber;
var TYPE$a = tokenizer2.TYPE;
var IDENTIFIER$7 = TYPE$a.Identifier;
var NUMBER$4 = TYPE$a.Number;
var PLUSSIGN$4 = TYPE$a.PlusSign;
var HYPHENMINUS$5 = TYPE$a.HyphenMinus;
var N$3 = 110;
var DISALLOW_SIGN = true;
var ALLOW_SIGN = false;
function checkTokenIsInteger(scanner, disallowSign) {
  var pos = scanner.tokenStart;
  if (scanner.source.charCodeAt(pos) === PLUSSIGN$4 || scanner.source.charCodeAt(pos) === HYPHENMINUS$5) {
    if (disallowSign) {
      scanner.error();
    }
    pos++;
  }
  for (; pos < scanner.tokenEnd; pos++) {
    if (!isNumber$2(scanner.source.charCodeAt(pos))) {
      scanner.error("Unexpected input", pos);
    }
  }
}
var AnPlusB = {
  name: "AnPlusB",
  structure: {
    a: [String, null],
    b: [String, null]
  },
  parse: function() {
    var start = this.scanner.tokenStart;
    var end = start;
    var prefix = "";
    var a = null;
    var b = null;
    if (this.scanner.tokenType === NUMBER$4 || this.scanner.tokenType === PLUSSIGN$4) {
      checkTokenIsInteger(this.scanner, ALLOW_SIGN);
      prefix = this.scanner.getTokenValue();
      this.scanner.next();
      end = this.scanner.tokenStart;
    }
    if (this.scanner.tokenType === IDENTIFIER$7) {
      var bStart = this.scanner.tokenStart;
      if (cmpChar$2(this.scanner.source, bStart, HYPHENMINUS$5)) {
        if (prefix === "") {
          prefix = "-";
          bStart++;
        } else {
          this.scanner.error("Unexpected hyphen minus");
        }
      }
      if (!cmpChar$2(this.scanner.source, bStart, N$3)) {
        this.scanner.error();
      }
      a = prefix === "" ? "1" : prefix === "+" ? "+1" : prefix === "-" ? "-1" : prefix;
      var len = this.scanner.tokenEnd - bStart;
      if (len > 1) {
        if (this.scanner.source.charCodeAt(bStart + 1) !== HYPHENMINUS$5) {
          this.scanner.error("Unexpected input", bStart + 1);
        }
        if (len > 2) {
          this.scanner.tokenStart = bStart + 2;
        } else {
          this.scanner.next();
          this.scanner.skipSC();
        }
        checkTokenIsInteger(this.scanner, DISALLOW_SIGN);
        b = "-" + this.scanner.getTokenValue();
        this.scanner.next();
        end = this.scanner.tokenStart;
      } else {
        prefix = "";
        this.scanner.next();
        end = this.scanner.tokenStart;
        this.scanner.skipSC();
        if (this.scanner.tokenType === HYPHENMINUS$5 || this.scanner.tokenType === PLUSSIGN$4) {
          prefix = this.scanner.getTokenValue();
          this.scanner.next();
          this.scanner.skipSC();
        }
        if (this.scanner.tokenType === NUMBER$4) {
          checkTokenIsInteger(this.scanner, prefix !== "");
          if (!isNumber$2(this.scanner.source.charCodeAt(this.scanner.tokenStart))) {
            prefix = this.scanner.source.charAt(this.scanner.tokenStart);
            this.scanner.tokenStart++;
          }
          if (prefix === "") {
            this.scanner.error();
          } else if (prefix === "+") {
            prefix = "";
          }
          b = prefix + this.scanner.getTokenValue();
          this.scanner.next();
          end = this.scanner.tokenStart;
        } else {
          if (prefix) {
            this.scanner.eat(NUMBER$4);
          }
        }
      }
    } else {
      if (prefix === "" || prefix === "+") {
        this.scanner.error("Number or identifier is expected", this.scanner.tokenStart + (this.scanner.tokenType === PLUSSIGN$4 || this.scanner.tokenType === HYPHENMINUS$5));
      }
      b = prefix;
    }
    return {
      type: "AnPlusB",
      loc: this.getLocation(start, end),
      a,
      b
    };
  },
  generate: function(processChunk, node2) {
    var a = node2.a !== null && node2.a !== void 0;
    var b = node2.b !== null && node2.b !== void 0;
    if (a) {
      processChunk(node2.a === "+1" ? "+n" : node2.a === "1" ? "n" : node2.a === "-1" ? "-n" : node2.a + "n");
      if (b) {
        b = String(node2.b);
        if (b.charAt(0) === "-" || b.charAt(0) === "+") {
          processChunk(b.charAt(0));
          processChunk(b.substr(1));
        } else {
          processChunk("+");
          processChunk(b);
        }
      }
    } else {
      processChunk(String(node2.b));
    }
  }
};
var TYPE$b = tokenizer2.TYPE;
var ATRULE$2 = TYPE$b.Atrule;
var SEMICOLON$1 = TYPE$b.Semicolon;
var LEFTCURLYBRACKET$2 = TYPE$b.LeftCurlyBracket;
var RIGHTCURLYBRACKET$1 = TYPE$b.RightCurlyBracket;
function isBlockAtrule() {
  for (var offset2 = 1, type; type = this.scanner.lookupType(offset2); offset2++) {
    if (type === RIGHTCURLYBRACKET$1) {
      return true;
    }
    if (type === LEFTCURLYBRACKET$2 || type === ATRULE$2) {
      return false;
    }
  }
  this.scanner.skip(offset2);
  this.scanner.eat(RIGHTCURLYBRACKET$1);
}
var Atrule = {
  name: "Atrule",
  structure: {
    name: String,
    expression: ["AtruleExpression", null],
    block: ["Block", null]
  },
  parse: function() {
    var start = this.scanner.tokenStart;
    var name;
    var nameLowerCase;
    var expression2 = null;
    var block = null;
    this.scanner.eat(ATRULE$2);
    name = this.scanner.substrToCursor(start + 1);
    nameLowerCase = name.toLowerCase();
    this.scanner.skipSC();
    expression2 = this.AtruleExpression(name);
    if (expression2.children.head === null) {
      expression2 = null;
    }
    this.scanner.skipSC();
    if (this.atrule.hasOwnProperty(nameLowerCase)) {
      if (typeof this.atrule[nameLowerCase].block === "function") {
        if (this.scanner.tokenType !== LEFTCURLYBRACKET$2) {
          this.scanner.error("Curly bracket is expected");
        }
        block = this.atrule[nameLowerCase].block.call(this);
      } else {
        if (!this.tolerant || !this.scanner.eof) {
          this.scanner.eat(SEMICOLON$1);
        }
      }
    } else {
      switch (this.scanner.tokenType) {
        case SEMICOLON$1:
          this.scanner.next();
          break;
        case LEFTCURLYBRACKET$2:
          block = this.Block(isBlockAtrule.call(this) ? this.Declaration : this.Rule);
          break;
        default:
          if (!this.tolerant) {
            this.scanner.error("Semicolon or block is expected");
          }
      }
    }
    return {
      type: "Atrule",
      loc: this.getLocation(start, this.scanner.tokenStart),
      name,
      expression: expression2,
      block
    };
  },
  generate: function(processChunk, node2) {
    processChunk("@");
    processChunk(node2.name);
    if (node2.expression !== null) {
      processChunk(" ");
      this.generate(processChunk, node2.expression);
    }
    if (node2.block) {
      this.generate(processChunk, node2.block);
    } else {
      processChunk(";");
    }
  },
  walkContext: "atrule"
};
var TYPE$c = tokenizer2.TYPE;
var SEMICOLON$2 = TYPE$c.Semicolon;
var LEFTCURLYBRACKET$3 = TYPE$c.LeftCurlyBracket;
function consumeRaw$1(startToken) {
  return new list().appendData(this.Raw(startToken, SEMICOLON$2, LEFTCURLYBRACKET$3, false, true));
}
function consumeDefaultSequence() {
  return this.readSequence(this.scope.AtruleExpression);
}
var AtruleExpression = {
  name: "AtruleExpression",
  structure: {
    children: [[]]
  },
  parse: function(name) {
    var children = null;
    var startToken = this.scanner.currentToken;
    if (name !== null) {
      name = name.toLowerCase();
    }
    if (this.parseAtruleExpression) {
      if (this.atrule.hasOwnProperty(name)) {
        if (typeof this.atrule[name].expression === "function") {
          children = this.tolerantParse(this.atrule[name].expression, consumeRaw$1);
        }
      } else {
        this.scanner.skipSC();
        children = this.tolerantParse(consumeDefaultSequence, consumeRaw$1);
      }
      if (this.tolerant) {
        if (this.scanner.eof || this.scanner.tokenType !== SEMICOLON$2 && this.scanner.tokenType !== LEFTCURLYBRACKET$3) {
          children = consumeRaw$1.call(this, startToken);
        }
      }
    } else {
      children = consumeRaw$1.call(this, startToken);
    }
    if (children === null) {
      children = new list();
    }
    return {
      type: "AtruleExpression",
      loc: this.getLocationFromList(children),
      children
    };
  },
  generate: function(processChunk, node2) {
    this.each(processChunk, node2);
  },
  walkContext: "atruleExpression"
};
var TYPE$d = tokenizer2.TYPE;
var IDENTIFIER$8 = TYPE$d.Identifier;
var STRING$4 = TYPE$d.String;
var DOLLARSIGN = TYPE$d.DollarSign;
var ASTERISK$2 = TYPE$d.Asterisk;
var COLON$2 = TYPE$d.Colon;
var EQUALSSIGN = TYPE$d.EqualsSign;
var LEFTSQUAREBRACKET$3 = TYPE$d.LeftSquareBracket;
var RIGHTSQUAREBRACKET$1 = TYPE$d.RightSquareBracket;
var CIRCUMFLEXACCENT = TYPE$d.CircumflexAccent;
var VERTICALLINE$1 = TYPE$d.VerticalLine;
var TILDE$1 = TYPE$d.Tilde;
function getAttributeName() {
  if (this.scanner.eof) {
    this.scanner.error("Unexpected end of input");
  }
  var start = this.scanner.tokenStart;
  var expectIdentifier = false;
  var checkColon = true;
  if (this.scanner.tokenType === ASTERISK$2) {
    expectIdentifier = true;
    checkColon = false;
    this.scanner.next();
  } else if (this.scanner.tokenType !== VERTICALLINE$1) {
    this.scanner.eat(IDENTIFIER$8);
  }
  if (this.scanner.tokenType === VERTICALLINE$1) {
    if (this.scanner.lookupType(1) !== EQUALSSIGN) {
      this.scanner.next();
      this.scanner.eat(IDENTIFIER$8);
    } else if (expectIdentifier) {
      this.scanner.error("Identifier is expected", this.scanner.tokenEnd);
    }
  } else if (expectIdentifier) {
    this.scanner.error("Vertical line is expected");
  }
  if (checkColon && this.scanner.tokenType === COLON$2) {
    this.scanner.next();
    this.scanner.eat(IDENTIFIER$8);
  }
  return {
    type: "Identifier",
    loc: this.getLocation(start, this.scanner.tokenStart),
    name: this.scanner.substrToCursor(start)
  };
}
function getOperator() {
  var start = this.scanner.tokenStart;
  var tokenType = this.scanner.tokenType;
  if (tokenType !== EQUALSSIGN && tokenType !== TILDE$1 && tokenType !== CIRCUMFLEXACCENT && tokenType !== DOLLARSIGN && tokenType !== ASTERISK$2 && tokenType !== VERTICALLINE$1) {
    this.scanner.error("Attribute selector (=, ~=, ^=, $=, *=, |=) is expected");
  }
  if (tokenType === EQUALSSIGN) {
    this.scanner.next();
  } else {
    this.scanner.next();
    this.scanner.eat(EQUALSSIGN);
  }
  return this.scanner.substrToCursor(start);
}
var AttributeSelector = {
  name: "AttributeSelector",
  structure: {
    name: "Identifier",
    matcher: [String, null],
    value: ["String", "Identifier", null],
    flags: [String, null]
  },
  parse: function() {
    var start = this.scanner.tokenStart;
    var name;
    var matcher = null;
    var value2 = null;
    var flags = null;
    this.scanner.eat(LEFTSQUAREBRACKET$3);
    this.scanner.skipSC();
    name = getAttributeName.call(this);
    this.scanner.skipSC();
    if (this.scanner.tokenType !== RIGHTSQUAREBRACKET$1) {
      if (this.scanner.tokenType !== IDENTIFIER$8) {
        matcher = getOperator.call(this);
        this.scanner.skipSC();
        value2 = this.scanner.tokenType === STRING$4 ? this.String() : this.Identifier();
        this.scanner.skipSC();
      }
      if (this.scanner.tokenType === IDENTIFIER$8) {
        flags = this.scanner.getTokenValue();
        this.scanner.next();
        this.scanner.skipSC();
      }
    }
    this.scanner.eat(RIGHTSQUAREBRACKET$1);
    return {
      type: "AttributeSelector",
      loc: this.getLocation(start, this.scanner.tokenStart),
      name,
      matcher,
      value: value2,
      flags
    };
  },
  generate: function(processChunk, node2) {
    var flagsPrefix = " ";
    processChunk("[");
    this.generate(processChunk, node2.name);
    if (node2.matcher !== null) {
      processChunk(node2.matcher);
      if (node2.value !== null) {
        this.generate(processChunk, node2.value);
        if (node2.value.type === "String") {
          flagsPrefix = "";
        }
      }
    }
    if (node2.flags !== null) {
      processChunk(flagsPrefix);
      processChunk(node2.flags);
    }
    processChunk("]");
  }
};
var TYPE$e = tokenizer2.TYPE;
var WHITESPACE$4 = TYPE$e.WhiteSpace;
var COMMENT$4 = TYPE$e.Comment;
var SEMICOLON$3 = TYPE$e.Semicolon;
var ATRULE$3 = TYPE$e.Atrule;
var LEFTCURLYBRACKET$4 = TYPE$e.LeftCurlyBracket;
var RIGHTCURLYBRACKET$2 = TYPE$e.RightCurlyBracket;
function consumeRaw$2(startToken) {
  return this.Raw(startToken, 0, SEMICOLON$3, true, true);
}
var Block = {
  name: "Block",
  structure: {
    children: [["Atrule", "Rule", "Declaration"]]
  },
  parse: function(defaultConsumer) {
    if (!defaultConsumer) {
      defaultConsumer = this.Declaration;
    }
    var start = this.scanner.tokenStart;
    var children = new list();
    this.scanner.eat(LEFTCURLYBRACKET$4);
    scan:
      while (!this.scanner.eof) {
        switch (this.scanner.tokenType) {
          case RIGHTCURLYBRACKET$2:
            break scan;
          case WHITESPACE$4:
          case COMMENT$4:
          case SEMICOLON$3:
            this.scanner.next();
            break;
          case ATRULE$3:
            children.appendData(this.tolerantParse(this.Atrule, consumeRaw$2));
            break;
          default:
            children.appendData(this.tolerantParse(defaultConsumer, consumeRaw$2));
        }
      }
    if (!this.tolerant || !this.scanner.eof) {
      this.scanner.eat(RIGHTCURLYBRACKET$2);
    }
    return {
      type: "Block",
      loc: this.getLocation(start, this.scanner.tokenStart),
      children
    };
  },
  generate: function(processChunk, node2) {
    processChunk("{");
    this.each(processChunk, node2);
    processChunk("}");
  },
  walkContext: "block"
};
var TYPE$f = tokenizer2.TYPE;
var LEFTSQUAREBRACKET$4 = TYPE$f.LeftSquareBracket;
var RIGHTSQUAREBRACKET$2 = TYPE$f.RightSquareBracket;
var Brackets = {
  name: "Brackets",
  structure: {
    children: [[]]
  },
  parse: function(readSequence3, recognizer) {
    var start = this.scanner.tokenStart;
    var children = null;
    this.scanner.eat(LEFTSQUAREBRACKET$4);
    children = readSequence3.call(this, recognizer);
    this.scanner.eat(RIGHTSQUAREBRACKET$2);
    return {
      type: "Brackets",
      loc: this.getLocation(start, this.scanner.tokenStart),
      children
    };
  },
  generate: function(processChunk, node2) {
    processChunk("[");
    this.each(processChunk, node2);
    processChunk("]");
  }
};
var CDC$2 = tokenizer2.TYPE.CDC;
var CDC_1 = {
  name: "CDC",
  structure: [],
  parse: function() {
    var start = this.scanner.tokenStart;
    this.scanner.eat(CDC$2);
    return {
      type: "CDC",
      loc: this.getLocation(start, this.scanner.tokenStart)
    };
  },
  generate: function(processChunk) {
    processChunk("-->");
  }
};
var CDO$2 = tokenizer2.TYPE.CDO;
var CDO_1 = {
  name: "CDO",
  structure: [],
  parse: function() {
    var start = this.scanner.tokenStart;
    this.scanner.eat(CDO$2);
    return {
      type: "CDO",
      loc: this.getLocation(start, this.scanner.tokenStart)
    };
  },
  generate: function(processChunk) {
    processChunk("<!--");
  }
};
var TYPE$g = tokenizer2.TYPE;
var IDENTIFIER$9 = TYPE$g.Identifier;
var FULLSTOP$3 = TYPE$g.FullStop;
var ClassSelector = {
  name: "ClassSelector",
  structure: {
    name: String
  },
  parse: function() {
    this.scanner.eat(FULLSTOP$3);
    return {
      type: "ClassSelector",
      loc: this.getLocation(this.scanner.tokenStart - 1, this.scanner.tokenEnd),
      name: this.scanner.consume(IDENTIFIER$9)
    };
  },
  generate: function(processChunk, node2) {
    processChunk(".");
    processChunk(node2.name);
  }
};
var TYPE$h = tokenizer2.TYPE;
var PLUSSIGN$5 = TYPE$h.PlusSign;
var SOLIDUS$2 = TYPE$h.Solidus;
var GREATERTHANSIGN$2 = TYPE$h.GreaterThanSign;
var TILDE$2 = TYPE$h.Tilde;
var Combinator = {
  name: "Combinator",
  structure: {
    name: String
  },
  parse: function() {
    var start = this.scanner.tokenStart;
    switch (this.scanner.tokenType) {
      case GREATERTHANSIGN$2:
      case PLUSSIGN$5:
      case TILDE$2:
        this.scanner.next();
        break;
      case SOLIDUS$2:
        this.scanner.next();
        this.scanner.expectIdentifier("deep");
        this.scanner.eat(SOLIDUS$2);
        break;
      default:
        this.scanner.error("Combinator is expected");
    }
    return {
      type: "Combinator",
      loc: this.getLocation(start, this.scanner.tokenStart),
      name: this.scanner.substrToCursor(start)
    };
  },
  generate: function(processChunk, node2) {
    processChunk(node2.name);
  }
};
var TYPE$i = tokenizer2.TYPE;
var ASTERISK$3 = TYPE$i.Asterisk;
var SOLIDUS$3 = TYPE$i.Solidus;
var Comment = {
  name: "Comment",
  structure: {
    value: String
  },
  parse: function() {
    var start = this.scanner.tokenStart;
    var end = this.scanner.tokenEnd;
    if (end - start + 2 >= 2 && this.scanner.source.charCodeAt(end - 2) === ASTERISK$3 && this.scanner.source.charCodeAt(end - 1) === SOLIDUS$3) {
      end -= 2;
    }
    this.scanner.next();
    return {
      type: "Comment",
      loc: this.getLocation(start, this.scanner.tokenStart),
      value: this.scanner.source.substring(start + 2, end)
    };
  },
  generate: function(processChunk, node2) {
    processChunk("/*");
    processChunk(node2.value);
    processChunk("*/");
  }
};
var TYPE$j = tokenizer2.TYPE;
var IDENTIFIER$a = TYPE$j.Identifier;
var COLON$3 = TYPE$j.Colon;
var EXCLAMATIONMARK$2 = TYPE$j.ExclamationMark;
var SOLIDUS$4 = TYPE$j.Solidus;
var ASTERISK$4 = TYPE$j.Asterisk;
var DOLLARSIGN$1 = TYPE$j.DollarSign;
var HYPHENMINUS$6 = TYPE$j.HyphenMinus;
var SEMICOLON$4 = TYPE$j.Semicolon;
var RIGHTCURLYBRACKET$3 = TYPE$j.RightCurlyBracket;
var RIGHTPARENTHESIS$1 = TYPE$j.RightParenthesis;
var PLUSSIGN$6 = TYPE$j.PlusSign;
var NUMBERSIGN$2 = TYPE$j.NumberSign;
var Declaration = {
  name: "Declaration",
  structure: {
    important: [Boolean, String],
    property: String,
    value: ["Value", "Raw"]
  },
  parse: function() {
    var start = this.scanner.tokenStart;
    var property = readProperty.call(this);
    var important = false;
    var value2;
    this.scanner.skipSC();
    this.scanner.eat(COLON$3);
    if (isCustomProperty(property) ? this.parseCustomProperty : this.parseValue) {
      value2 = this.Value(property);
    } else {
      value2 = this.Raw(this.scanner.currentToken, EXCLAMATIONMARK$2, SEMICOLON$4, false, false);
    }
    if (this.scanner.tokenType === EXCLAMATIONMARK$2) {
      important = getImportant(this.scanner);
      this.scanner.skipSC();
    }
    if (!this.scanner.eof && this.scanner.tokenType !== SEMICOLON$4 && this.scanner.tokenType !== RIGHTPARENTHESIS$1 && this.scanner.tokenType !== RIGHTCURLYBRACKET$3) {
      this.scanner.error();
    }
    return {
      type: "Declaration",
      loc: this.getLocation(start, this.scanner.tokenStart),
      important,
      property,
      value: value2
    };
  },
  generate: function(processChunk, node2, item) {
    processChunk(node2.property);
    processChunk(":");
    this.generate(processChunk, node2.value);
    if (node2.important) {
      processChunk(node2.important === true ? "!important" : "!" + node2.important);
    }
    if (item && item.next) {
      processChunk(";");
    }
  },
  walkContext: "declaration"
};
function isCustomProperty(name) {
  return name.length >= 2 && name.charCodeAt(0) === HYPHENMINUS$6 && name.charCodeAt(1) === HYPHENMINUS$6;
}
function readProperty() {
  var start = this.scanner.tokenStart;
  var prefix = 0;
  switch (this.scanner.tokenType) {
    case ASTERISK$4:
    case DOLLARSIGN$1:
    case PLUSSIGN$6:
    case NUMBERSIGN$2:
      prefix = 1;
      break;
    case SOLIDUS$4:
      prefix = this.scanner.lookupType(1) === SOLIDUS$4 ? 2 : 1;
      break;
  }
  if (this.scanner.lookupType(prefix) === HYPHENMINUS$6) {
    prefix++;
  }
  if (prefix) {
    this.scanner.skip(prefix);
  }
  this.scanner.eat(IDENTIFIER$a);
  return this.scanner.substrToCursor(start);
}
function getImportant(scanner) {
  scanner.eat(EXCLAMATIONMARK$2);
  scanner.skipSC();
  var important = scanner.consume(IDENTIFIER$a);
  return important === "important" ? true : important;
}
var TYPE$k = tokenizer2.TYPE;
var WHITESPACE$5 = TYPE$k.WhiteSpace;
var COMMENT$5 = TYPE$k.Comment;
var SEMICOLON$5 = TYPE$k.Semicolon;
function consumeRaw$3(startToken) {
  return this.Raw(startToken, 0, SEMICOLON$5, true, true);
}
var DeclarationList = {
  name: "DeclarationList",
  structure: {
    children: [["Declaration"]]
  },
  parse: function() {
    var children = new list();
    while (!this.scanner.eof) {
      switch (this.scanner.tokenType) {
        case WHITESPACE$5:
        case COMMENT$5:
        case SEMICOLON$5:
          this.scanner.next();
          break;
        default:
          children.appendData(this.tolerantParse(this.Declaration, consumeRaw$3));
      }
    }
    return {
      type: "DeclarationList",
      loc: this.getLocationFromList(children),
      children
    };
  },
  generate: function(processChunk, node2) {
    this.each(processChunk, node2);
  }
};
var NUMBER$5 = tokenizer2.TYPE.Number;
function readUnit(scanner) {
  var unit = scanner.getTokenValue();
  var backSlashPos = unit.indexOf("\\");
  if (backSlashPos > 0) {
    scanner.tokenStart += backSlashPos;
    return unit.substring(0, backSlashPos);
  }
  scanner.next();
  return unit;
}
var Dimension = {
  name: "Dimension",
  structure: {
    value: String,
    unit: String
  },
  parse: function() {
    var start = this.scanner.tokenStart;
    var value2 = this.scanner.consume(NUMBER$5);
    var unit = readUnit(this.scanner);
    return {
      type: "Dimension",
      loc: this.getLocation(start, this.scanner.tokenStart),
      value: value2,
      unit
    };
  },
  generate: function(processChunk, node2) {
    processChunk(node2.value);
    processChunk(node2.unit);
  }
};
var TYPE$l = tokenizer2.TYPE;
var RIGHTPARENTHESIS$2 = TYPE$l.RightParenthesis;
var _Function = {
  name: "Function",
  structure: {
    name: String,
    children: [[]]
  },
  parse: function(readSequence3, recognizer) {
    var start = this.scanner.tokenStart;
    var name = this.scanner.consumeFunctionName();
    var nameLowerCase = name.toLowerCase();
    var children;
    children = recognizer.hasOwnProperty(nameLowerCase) ? recognizer[nameLowerCase].call(this, recognizer) : readSequence3.call(this, recognizer);
    this.scanner.eat(RIGHTPARENTHESIS$2);
    return {
      type: "Function",
      loc: this.getLocation(start, this.scanner.tokenStart),
      name,
      children
    };
  },
  generate: function(processChunk, node2) {
    processChunk(node2.name);
    processChunk("(");
    this.each(processChunk, node2);
    processChunk(")");
  },
  walkContext: "function"
};
var isHex$1 = tokenizer2.isHex;
var TYPE$m = tokenizer2.TYPE;
var IDENTIFIER$b = TYPE$m.Identifier;
var NUMBER$6 = TYPE$m.Number;
var NUMBERSIGN$3 = TYPE$m.NumberSign;
function consumeHexSequence(scanner, required) {
  if (!isHex$1(scanner.source.charCodeAt(scanner.tokenStart))) {
    if (required) {
      scanner.error("Unexpected input", scanner.tokenStart);
    } else {
      return;
    }
  }
  for (var pos = scanner.tokenStart + 1; pos < scanner.tokenEnd; pos++) {
    var code = scanner.source.charCodeAt(pos);
    if (!isHex$1(code)) {
      scanner.tokenStart = pos;
      return;
    }
  }
  scanner.next();
}
var HexColor = {
  name: "HexColor",
  structure: {
    value: String
  },
  parse: function() {
    var start = this.scanner.tokenStart;
    this.scanner.eat(NUMBERSIGN$3);
    switch (this.scanner.tokenType) {
      case NUMBER$6:
        consumeHexSequence(this.scanner, true);
        if (this.scanner.tokenType === IDENTIFIER$b) {
          consumeHexSequence(this.scanner, false);
        }
        break;
      case IDENTIFIER$b:
        consumeHexSequence(this.scanner, true);
        break;
      default:
        this.scanner.error("Number or identifier is expected");
    }
    return {
      type: "HexColor",
      loc: this.getLocation(start, this.scanner.tokenStart),
      value: this.scanner.substrToCursor(start + 1)
    };
  },
  generate: function(processChunk, node2) {
    processChunk("#");
    processChunk(node2.value);
  }
};
var TYPE$n = tokenizer2.TYPE;
var IDENTIFIER$c = TYPE$n.Identifier;
var Identifier = {
  name: "Identifier",
  structure: {
    name: String
  },
  parse: function() {
    return {
      type: "Identifier",
      loc: this.getLocation(this.scanner.tokenStart, this.scanner.tokenEnd),
      name: this.scanner.consume(IDENTIFIER$c)
    };
  },
  generate: function(processChunk, node2) {
    processChunk(node2.name);
  }
};
var TYPE$o = tokenizer2.TYPE;
var IDENTIFIER$d = TYPE$o.Identifier;
var NUMBERSIGN$4 = TYPE$o.NumberSign;
var IdSelector = {
  name: "IdSelector",
  structure: {
    name: String
  },
  parse: function() {
    this.scanner.eat(NUMBERSIGN$4);
    return {
      type: "IdSelector",
      loc: this.getLocation(this.scanner.tokenStart - 1, this.scanner.tokenEnd),
      name: this.scanner.consume(IDENTIFIER$d)
    };
  },
  generate: function(processChunk, node2) {
    processChunk("#");
    processChunk(node2.name);
  }
};
var TYPE$p = tokenizer2.TYPE;
var IDENTIFIER$e = TYPE$p.Identifier;
var NUMBER$7 = TYPE$p.Number;
var LEFTPARENTHESIS$4 = TYPE$p.LeftParenthesis;
var RIGHTPARENTHESIS$3 = TYPE$p.RightParenthesis;
var COLON$4 = TYPE$p.Colon;
var SOLIDUS$5 = TYPE$p.Solidus;
var MediaFeature = {
  name: "MediaFeature",
  structure: {
    name: String,
    value: ["Identifier", "Number", "Dimension", "Ratio", null]
  },
  parse: function() {
    var start = this.scanner.tokenStart;
    var name;
    var value2 = null;
    this.scanner.eat(LEFTPARENTHESIS$4);
    this.scanner.skipSC();
    name = this.scanner.consume(IDENTIFIER$e);
    this.scanner.skipSC();
    if (this.scanner.tokenType !== RIGHTPARENTHESIS$3) {
      this.scanner.eat(COLON$4);
      this.scanner.skipSC();
      switch (this.scanner.tokenType) {
        case NUMBER$7:
          if (this.scanner.lookupType(1) === IDENTIFIER$e) {
            value2 = this.Dimension();
          } else if (this.scanner.lookupNonWSType(1) === SOLIDUS$5) {
            value2 = this.Ratio();
          } else {
            value2 = this.Number();
          }
          break;
        case IDENTIFIER$e:
          value2 = this.Identifier();
          break;
        default:
          this.scanner.error("Number, dimension, ratio or identifier is expected");
      }
      this.scanner.skipSC();
    }
    this.scanner.eat(RIGHTPARENTHESIS$3);
    return {
      type: "MediaFeature",
      loc: this.getLocation(start, this.scanner.tokenStart),
      name,
      value: value2
    };
  },
  generate: function(processChunk, node2) {
    processChunk("(");
    processChunk(node2.name);
    if (node2.value !== null) {
      processChunk(":");
      this.generate(processChunk, node2.value);
    }
    processChunk(")");
  }
};
var TYPE$q = tokenizer2.TYPE;
var WHITESPACE$6 = TYPE$q.WhiteSpace;
var COMMENT$6 = TYPE$q.Comment;
var IDENTIFIER$f = TYPE$q.Identifier;
var LEFTPARENTHESIS$5 = TYPE$q.LeftParenthesis;
var MediaQuery = {
  name: "MediaQuery",
  structure: {
    children: [["Identifier", "MediaFeature", "WhiteSpace"]]
  },
  parse: function() {
    this.scanner.skipSC();
    var children = new list();
    var child = null;
    var space = null;
    scan:
      while (!this.scanner.eof) {
        switch (this.scanner.tokenType) {
          case COMMENT$6:
            this.scanner.next();
            continue;
          case WHITESPACE$6:
            space = this.WhiteSpace();
            continue;
          case IDENTIFIER$f:
            child = this.Identifier();
            break;
          case LEFTPARENTHESIS$5:
            child = this.MediaFeature();
            break;
          default:
            break scan;
        }
        if (space !== null) {
          children.appendData(space);
          space = null;
        }
        children.appendData(child);
      }
    if (child === null) {
      this.scanner.error("Identifier or parenthesis is expected");
    }
    return {
      type: "MediaQuery",
      loc: this.getLocationFromList(children),
      children
    };
  },
  generate: function(processChunk, node2) {
    this.each(processChunk, node2);
  }
};
var COMMA$2 = tokenizer2.TYPE.Comma;
var MediaQueryList = {
  name: "MediaQueryList",
  structure: {
    children: [["MediaQuery"]]
  },
  parse: function(relative) {
    var children = new list();
    this.scanner.skipSC();
    while (!this.scanner.eof) {
      children.appendData(this.MediaQuery(relative));
      if (this.scanner.tokenType !== COMMA$2) {
        break;
      }
      this.scanner.next();
    }
    return {
      type: "MediaQueryList",
      loc: this.getLocationFromList(children),
      children
    };
  },
  generate: function(processChunk, node2) {
    this.eachComma(processChunk, node2);
  }
};
var Nth = {
  name: "Nth",
  structure: {
    nth: ["AnPlusB", "Identifier"],
    selector: ["SelectorList", null]
  },
  parse: function(allowOfClause) {
    this.scanner.skipSC();
    var start = this.scanner.tokenStart;
    var end = start;
    var selector2 = null;
    var query;
    if (this.scanner.lookupValue(0, "odd") || this.scanner.lookupValue(0, "even")) {
      query = this.Identifier();
    } else {
      query = this.AnPlusB();
    }
    this.scanner.skipSC();
    if (allowOfClause && this.scanner.lookupValue(0, "of")) {
      this.scanner.next();
      selector2 = this.SelectorList();
      if (this.needPositions) {
        end = selector2.children.last().loc.end.offset;
      }
    } else {
      if (this.needPositions) {
        end = query.loc.end.offset;
      }
    }
    return {
      type: "Nth",
      loc: this.getLocation(start, end),
      nth: query,
      selector: selector2
    };
  },
  generate: function(processChunk, node2) {
    this.generate(processChunk, node2.nth);
    if (node2.selector !== null) {
      processChunk(" of ");
      this.generate(processChunk, node2.selector);
    }
  }
};
var NUMBER$8 = tokenizer2.TYPE.Number;
var _Number = {
  name: "Number",
  structure: {
    value: String
  },
  parse: function() {
    return {
      type: "Number",
      loc: this.getLocation(this.scanner.tokenStart, this.scanner.tokenEnd),
      value: this.scanner.consume(NUMBER$8)
    };
  },
  generate: function(processChunk, node2) {
    processChunk(node2.value);
  }
};
var Operator = {
  name: "Operator",
  structure: {
    value: String
  },
  parse: function() {
    var start = this.scanner.tokenStart;
    this.scanner.next();
    return {
      type: "Operator",
      loc: this.getLocation(start, this.scanner.tokenStart),
      value: this.scanner.substrToCursor(start)
    };
  },
  generate: function(processChunk, node2) {
    processChunk(node2.value);
  }
};
var TYPE$r = tokenizer2.TYPE;
var LEFTPARENTHESIS$6 = TYPE$r.LeftParenthesis;
var RIGHTPARENTHESIS$4 = TYPE$r.RightParenthesis;
var Parentheses = {
  name: "Parentheses",
  structure: {
    children: [[]]
  },
  parse: function(readSequence3, recognizer) {
    var start = this.scanner.tokenStart;
    var children = null;
    this.scanner.eat(LEFTPARENTHESIS$6);
    children = readSequence3.call(this, recognizer);
    this.scanner.eat(RIGHTPARENTHESIS$4);
    return {
      type: "Parentheses",
      loc: this.getLocation(start, this.scanner.tokenStart),
      children
    };
  },
  generate: function(processChunk, node2) {
    processChunk("(");
    this.each(processChunk, node2);
    processChunk(")");
  }
};
var TYPE$s = tokenizer2.TYPE;
var NUMBER$9 = TYPE$s.Number;
var PERCENTSIGN$1 = TYPE$s.PercentSign;
var Percentage = {
  name: "Percentage",
  structure: {
    value: String
  },
  parse: function() {
    var start = this.scanner.tokenStart;
    var number = this.scanner.consume(NUMBER$9);
    this.scanner.eat(PERCENTSIGN$1);
    return {
      type: "Percentage",
      loc: this.getLocation(start, this.scanner.tokenStart),
      value: number
    };
  },
  generate: function(processChunk, node2) {
    processChunk(node2.value);
    processChunk("%");
  }
};
var TYPE$t = tokenizer2.TYPE;
var IDENTIFIER$g = TYPE$t.Identifier;
var FUNCTION$4 = TYPE$t.Function;
var COLON$5 = TYPE$t.Colon;
var RIGHTPARENTHESIS$5 = TYPE$t.RightParenthesis;
var PseudoClassSelector = {
  name: "PseudoClassSelector",
  structure: {
    name: String,
    children: [["Raw"], null]
  },
  parse: function() {
    var start = this.scanner.tokenStart;
    var children = null;
    var name;
    var nameLowerCase;
    this.scanner.eat(COLON$5);
    if (this.scanner.tokenType === FUNCTION$4) {
      name = this.scanner.consumeFunctionName();
      nameLowerCase = name.toLowerCase();
      if (this.pseudo.hasOwnProperty(nameLowerCase)) {
        this.scanner.skipSC();
        children = this.pseudo[nameLowerCase].call(this);
        this.scanner.skipSC();
      } else {
        children = new list().appendData(this.Raw(this.scanner.currentToken, 0, 0, false, false));
      }
      this.scanner.eat(RIGHTPARENTHESIS$5);
    } else {
      name = this.scanner.consume(IDENTIFIER$g);
    }
    return {
      type: "PseudoClassSelector",
      loc: this.getLocation(start, this.scanner.tokenStart),
      name,
      children
    };
  },
  generate: function(processChunk, node2) {
    processChunk(":");
    processChunk(node2.name);
    if (node2.children !== null) {
      processChunk("(");
      this.each(processChunk, node2);
      processChunk(")");
    }
  },
  walkContext: "function"
};
var TYPE$u = tokenizer2.TYPE;
var IDENTIFIER$h = TYPE$u.Identifier;
var FUNCTION$5 = TYPE$u.Function;
var COLON$6 = TYPE$u.Colon;
var RIGHTPARENTHESIS$6 = TYPE$u.RightParenthesis;
var PseudoElementSelector = {
  name: "PseudoElementSelector",
  structure: {
    name: String,
    children: [["Raw"], null]
  },
  parse: function() {
    var start = this.scanner.tokenStart;
    var children = null;
    var name;
    var nameLowerCase;
    this.scanner.eat(COLON$6);
    this.scanner.eat(COLON$6);
    if (this.scanner.tokenType === FUNCTION$5) {
      name = this.scanner.consumeFunctionName();
      nameLowerCase = name.toLowerCase();
      if (this.pseudo.hasOwnProperty(nameLowerCase)) {
        this.scanner.skipSC();
        children = this.pseudo[nameLowerCase].call(this);
        this.scanner.skipSC();
      } else {
        children = new list().appendData(this.Raw(this.scanner.currentToken, 0, 0, false, false));
      }
      this.scanner.eat(RIGHTPARENTHESIS$6);
    } else {
      name = this.scanner.consume(IDENTIFIER$h);
    }
    return {
      type: "PseudoElementSelector",
      loc: this.getLocation(start, this.scanner.tokenStart),
      name,
      children
    };
  },
  generate: function(processChunk, node2) {
    processChunk("::");
    processChunk(node2.name);
    if (node2.children !== null) {
      processChunk("(");
      this.each(processChunk, node2);
      processChunk(")");
    }
  },
  walkContext: "function"
};
var isNumber$3 = tokenizer2.isNumber;
var TYPE$v = tokenizer2.TYPE;
var NUMBER$a = TYPE$v.Number;
var SOLIDUS$6 = TYPE$v.Solidus;
var FULLSTOP$4 = TYPE$v.FullStop;
function consumeNumber(scanner) {
  var value2 = scanner.consumeNonWS(NUMBER$a);
  for (var i = 0; i < value2.length; i++) {
    var code = value2.charCodeAt(i);
    if (!isNumber$3(code) && code !== FULLSTOP$4) {
      scanner.error("Unsigned number is expected", scanner.tokenStart - value2.length + i);
    }
  }
  if (Number(value2) === 0) {
    scanner.error("Zero number is not allowed", scanner.tokenStart - value2.length);
  }
  return value2;
}
var Ratio = {
  name: "Ratio",
  structure: {
    left: String,
    right: String
  },
  parse: function() {
    var start = this.scanner.tokenStart;
    var left = consumeNumber(this.scanner);
    var right;
    this.scanner.eatNonWS(SOLIDUS$6);
    right = consumeNumber(this.scanner);
    return {
      type: "Ratio",
      loc: this.getLocation(start, this.scanner.tokenStart),
      left,
      right
    };
  },
  generate: function(processChunk, node2) {
    processChunk(node2.left);
    processChunk("/");
    processChunk(node2.right);
  }
};
var Raw = {
  name: "Raw",
  structure: {
    value: String
  },
  parse: function(startToken, endTokenType1, endTokenType2, includeTokenType2, excludeWhiteSpace) {
    var startOffset = this.scanner.getTokenStart(startToken);
    var endOffset;
    this.scanner.skip(this.scanner.getRawLength(startToken, endTokenType1, endTokenType2, includeTokenType2));
    if (excludeWhiteSpace && this.scanner.tokenStart > startOffset) {
      endOffset = this.scanner.getOffsetExcludeWS();
    } else {
      endOffset = this.scanner.tokenStart;
    }
    return {
      type: "Raw",
      loc: this.getLocation(startOffset, endOffset),
      value: this.scanner.source.substring(startOffset, endOffset)
    };
  },
  generate: function(processChunk, node2) {
    processChunk(node2.value);
  }
};
var TYPE$w = tokenizer2.TYPE;
var LEFTCURLYBRACKET$5 = TYPE$w.LeftCurlyBracket;
function consumeRaw$4(startToken) {
  return this.Raw(startToken, LEFTCURLYBRACKET$5, 0, false, true);
}
var Rule = {
  name: "Rule",
  structure: {
    selector: ["SelectorList", "Raw"],
    block: ["Block"]
  },
  parse: function() {
    var startToken = this.scanner.currentToken;
    var startOffset = this.scanner.tokenStart;
    var selector2 = this.parseSelector ? this.tolerantParse(this.SelectorList, consumeRaw$4) : consumeRaw$4.call(this, startToken);
    var block = this.Block(this.Declaration);
    return {
      type: "Rule",
      loc: this.getLocation(startOffset, this.scanner.tokenStart),
      selector: selector2,
      block
    };
  },
  generate: function(processChunk, node2) {
    this.generate(processChunk, node2.selector);
    this.generate(processChunk, node2.block);
  },
  walkContext: "rule"
};
var Selector = {
  name: "Selector",
  structure: {
    children: [[
      "TypeSelector",
      "IdSelector",
      "ClassSelector",
      "AttributeSelector",
      "PseudoClassSelector",
      "PseudoElementSelector",
      "Combinator",
      "WhiteSpace"
    ]]
  },
  parse: function() {
    var children = this.readSequence(this.scope.Selector);
    if (children.isEmpty()) {
      this.scanner.error("Selector is expected");
    }
    return {
      type: "Selector",
      loc: this.getLocationFromList(children),
      children
    };
  },
  generate: function(processChunk, node2) {
    this.each(processChunk, node2);
  }
};
var TYPE$x = tokenizer2.TYPE;
var COMMA$3 = TYPE$x.Comma;
var LEFTCURLYBRACKET$6 = TYPE$x.LeftCurlyBracket;
var SelectorList = {
  name: "SelectorList",
  structure: {
    children: [["Selector", "Raw"]]
  },
  parse: function() {
    var children = new list();
    while (!this.scanner.eof) {
      children.appendData(this.parseSelector ? this.Selector() : this.Raw(this.scanner.currentToken, COMMA$3, LEFTCURLYBRACKET$6, false, false));
      if (this.scanner.tokenType === COMMA$3) {
        this.scanner.next();
        continue;
      }
      break;
    }
    return {
      type: "SelectorList",
      loc: this.getLocationFromList(children),
      children
    };
  },
  generate: function(processChunk, node2) {
    this.eachComma(processChunk, node2);
  },
  walkContext: "selector"
};
var STRING$5 = tokenizer2.TYPE.String;
var _String = {
  name: "String",
  structure: {
    value: String
  },
  parse: function() {
    return {
      type: "String",
      loc: this.getLocation(this.scanner.tokenStart, this.scanner.tokenEnd),
      value: this.scanner.consume(STRING$5)
    };
  },
  generate: function(processChunk, node2) {
    processChunk(node2.value);
  }
};
var TYPE$y = tokenizer2.TYPE;
var WHITESPACE$7 = TYPE$y.WhiteSpace;
var COMMENT$7 = TYPE$y.Comment;
var EXCLAMATIONMARK$3 = TYPE$y.ExclamationMark;
var ATRULE$4 = TYPE$y.Atrule;
var CDO$3 = TYPE$y.CDO;
var CDC$3 = TYPE$y.CDC;
function consumeRaw$5(startToken) {
  return this.Raw(startToken, 0, 0, false, false);
}
var StyleSheet = {
  name: "StyleSheet",
  structure: {
    children: [["Comment", "Atrule", "Rule", "Raw"]]
  },
  parse: function() {
    var start = this.scanner.tokenStart;
    var children = new list();
    var child;
    while (!this.scanner.eof) {
      switch (this.scanner.tokenType) {
        case WHITESPACE$7:
          this.scanner.next();
          continue;
        case COMMENT$7:
          if (this.scanner.source.charCodeAt(this.scanner.tokenStart + 2) !== EXCLAMATIONMARK$3) {
            this.scanner.next();
            continue;
          }
          child = this.Comment();
          break;
        case CDO$3:
          child = this.CDO();
          break;
        case CDC$3:
          child = this.CDC();
          break;
        case ATRULE$4:
          child = this.Atrule();
          break;
        default:
          child = this.tolerantParse(this.Rule, consumeRaw$5);
      }
      children.appendData(child);
    }
    return {
      type: "StyleSheet",
      loc: this.getLocation(start, this.scanner.tokenStart),
      children
    };
  },
  generate: function(processChunk, node2) {
    this.each(processChunk, node2);
  },
  walkContext: "stylesheet"
};
var TYPE$z = tokenizer2.TYPE;
var IDENTIFIER$i = TYPE$z.Identifier;
var ASTERISK$5 = TYPE$z.Asterisk;
var VERTICALLINE$2 = TYPE$z.VerticalLine;
function eatIdentifierOrAsterisk() {
  if (this.scanner.tokenType !== IDENTIFIER$i && this.scanner.tokenType !== ASTERISK$5) {
    this.scanner.error("Identifier or asterisk is expected");
  }
  this.scanner.next();
}
var TypeSelector = {
  name: "TypeSelector",
  structure: {
    name: String
  },
  parse: function() {
    var start = this.scanner.tokenStart;
    if (this.scanner.tokenType === VERTICALLINE$2) {
      this.scanner.next();
      eatIdentifierOrAsterisk.call(this);
    } else {
      eatIdentifierOrAsterisk.call(this);
      if (this.scanner.tokenType === VERTICALLINE$2) {
        this.scanner.next();
        eatIdentifierOrAsterisk.call(this);
      }
    }
    return {
      type: "TypeSelector",
      loc: this.getLocation(start, this.scanner.tokenStart),
      name: this.scanner.substrToCursor(start)
    };
  },
  generate: function(processChunk, node2) {
    processChunk(node2.name);
  }
};
var isHex$2 = tokenizer2.isHex;
var TYPE$A = tokenizer2.TYPE;
var IDENTIFIER$j = TYPE$A.Identifier;
var NUMBER$b = TYPE$A.Number;
var PLUSSIGN$7 = TYPE$A.PlusSign;
var HYPHENMINUS$7 = TYPE$A.HyphenMinus;
var FULLSTOP$5 = TYPE$A.FullStop;
var QUESTIONMARK = TYPE$A.QuestionMark;
function scanUnicodeNumber(scanner) {
  for (var pos = scanner.tokenStart + 1; pos < scanner.tokenEnd; pos++) {
    var code = scanner.source.charCodeAt(pos);
    if (code === FULLSTOP$5 || code === PLUSSIGN$7) {
      scanner.tokenStart = pos;
      return false;
    }
  }
  return true;
}
function scanUnicodeRange(scanner) {
  var hexStart = scanner.tokenStart + 1;
  var hexLength = 0;
  scan: {
    if (scanner.tokenType === NUMBER$b) {
      if (scanner.source.charCodeAt(scanner.tokenStart) !== FULLSTOP$5 && scanUnicodeNumber(scanner)) {
        scanner.next();
      } else if (scanner.source.charCodeAt(scanner.tokenStart) !== HYPHENMINUS$7) {
        break scan;
      }
    } else {
      scanner.next();
    }
    if (scanner.tokenType === HYPHENMINUS$7) {
      scanner.next();
    }
    if (scanner.tokenType === NUMBER$b) {
      scanner.next();
    }
    if (scanner.tokenType === IDENTIFIER$j) {
      scanner.next();
    }
    if (scanner.tokenStart === hexStart) {
      scanner.error("Unexpected input", hexStart);
    }
  }
  for (var i = hexStart, wasHyphenMinus = false; i < scanner.tokenStart; i++) {
    var code = scanner.source.charCodeAt(i);
    if (isHex$2(code) === false && (code !== HYPHENMINUS$7 || wasHyphenMinus)) {
      scanner.error("Unexpected input", i);
    }
    if (code === HYPHENMINUS$7) {
      if (hexLength === 0) {
        scanner.error("Unexpected input", i);
      }
      wasHyphenMinus = true;
      hexLength = 0;
    } else {
      hexLength++;
      if (hexLength > 6) {
        scanner.error("Too long hex sequence", i);
      }
    }
  }
  if (hexLength === 0) {
    scanner.error("Unexpected input", i - 1);
  }
  if (!wasHyphenMinus) {
    for (; hexLength < 6 && !scanner.eof; scanner.next()) {
      if (scanner.tokenType !== QUESTIONMARK) {
        break;
      }
      hexLength++;
    }
  }
}
var UnicodeRange = {
  name: "UnicodeRange",
  structure: {
    value: String
  },
  parse: function() {
    var start = this.scanner.tokenStart;
    this.scanner.next();
    scanUnicodeRange(this.scanner);
    return {
      type: "UnicodeRange",
      loc: this.getLocation(start, this.scanner.tokenStart),
      value: this.scanner.substrToCursor(start)
    };
  },
  generate: function(processChunk, node2) {
    processChunk(node2.value);
  }
};
var TYPE$B = tokenizer2.TYPE;
var STRING$6 = TYPE$B.String;
var URL$5 = TYPE$B.Url;
var RAW$2 = TYPE$B.Raw;
var RIGHTPARENTHESIS$7 = TYPE$B.RightParenthesis;
var Url = {
  name: "Url",
  structure: {
    value: ["String", "Raw"]
  },
  parse: function() {
    var start = this.scanner.tokenStart;
    var value2;
    this.scanner.eat(URL$5);
    this.scanner.skipSC();
    switch (this.scanner.tokenType) {
      case STRING$6:
        value2 = this.String();
        break;
      case RAW$2:
        value2 = this.Raw(this.scanner.currentToken, 0, RAW$2, true, false);
        break;
      default:
        this.scanner.error("String or Raw is expected");
    }
    this.scanner.skipSC();
    this.scanner.eat(RIGHTPARENTHESIS$7);
    return {
      type: "Url",
      loc: this.getLocation(start, this.scanner.tokenStart),
      value: value2
    };
  },
  generate: function(processChunk, node2) {
    processChunk("url");
    processChunk("(");
    this.generate(processChunk, node2.value);
    processChunk(")");
  }
};
var endsWith$1 = tokenizer2.endsWith;
var TYPE$C = tokenizer2.TYPE;
var WHITESPACE$8 = TYPE$C.WhiteSpace;
var COMMENT$8 = TYPE$C.Comment;
var FUNCTION$6 = TYPE$C.Function;
var COLON$7 = TYPE$C.Colon;
var SEMICOLON$6 = TYPE$C.Semicolon;
var EXCLAMATIONMARK$4 = TYPE$C.ExclamationMark;
function checkProgid(scanner) {
  var offset2 = 0;
  for (var type; type = scanner.lookupType(offset2); offset2++) {
    if (type !== WHITESPACE$8 && type !== COMMENT$8) {
      break;
    }
  }
  if (scanner.lookupValue(offset2, "alpha(") || scanner.lookupValue(offset2, "chroma(") || scanner.lookupValue(offset2, "dropshadow(")) {
    if (scanner.lookupType(offset2) !== FUNCTION$6) {
      return false;
    }
  } else {
    if (scanner.lookupValue(offset2, "progid") === false || scanner.lookupType(offset2 + 1) !== COLON$7) {
      return false;
    }
  }
  return true;
}
var Value = {
  name: "Value",
  structure: {
    children: [[]]
  },
  parse: function(property) {
    if (property !== null && endsWith$1(property, "filter") && checkProgid(this.scanner)) {
      this.scanner.skipSC();
      return this.Raw(this.scanner.currentToken, EXCLAMATIONMARK$4, SEMICOLON$6, false, false);
    }
    var start = this.scanner.tokenStart;
    var children = this.readSequence(this.scope.Value);
    return {
      type: "Value",
      loc: this.getLocation(start, this.scanner.tokenStart),
      children
    };
  },
  generate: function(processChunk, node2) {
    this.each(processChunk, node2);
  }
};
var WHITESPACE$9 = tokenizer2.TYPE.WhiteSpace;
var SPACE$2 = Object.freeze({
  type: "WhiteSpace",
  loc: null,
  value: " "
});
var WhiteSpace = {
  name: "WhiteSpace",
  structure: {
    value: String
  },
  parse: function() {
    this.scanner.eat(WHITESPACE$9);
    return SPACE$2;
  },
  generate: function(processChunk, node2) {
    processChunk(node2.value);
  }
};
var node = {
  AnPlusB,
  Atrule,
  AtruleExpression,
  AttributeSelector,
  Block,
  Brackets,
  CDC: CDC_1,
  CDO: CDO_1,
  ClassSelector,
  Combinator,
  Comment,
  Declaration,
  DeclarationList,
  Dimension,
  Function: _Function,
  HexColor,
  Identifier,
  IdSelector,
  MediaFeature,
  MediaQuery,
  MediaQueryList,
  Nth,
  Number: _Number,
  Operator,
  Parentheses,
  Percentage,
  PseudoClassSelector,
  PseudoElementSelector,
  Ratio,
  Raw,
  Rule,
  Selector,
  SelectorList,
  String: _String,
  StyleSheet,
  TypeSelector,
  UnicodeRange,
  Url,
  Value,
  WhiteSpace
};
var parser = {
  parseContext: {
    default: "StyleSheet",
    stylesheet: "StyleSheet",
    atrule: "Atrule",
    atruleExpression: function(options) {
      return this.AtruleExpression(options.atrule ? String(options.atrule) : null);
    },
    mediaQueryList: "MediaQueryList",
    mediaQuery: "MediaQuery",
    rule: "Rule",
    selectorList: "SelectorList",
    selector: "Selector",
    block: function() {
      return this.Block(this.Declaration);
    },
    declarationList: "DeclarationList",
    declaration: "Declaration",
    value: function(options) {
      return this.Value(options.property ? String(options.property) : null);
    }
  },
  scope,
  atrule,
  pseudo,
  node
};
var parser$1 = create(parser);
function read_style(parser2, start, attributes) {
  const content_start = parser2.index;
  const styles = parser2.read_until(/<\/style>/);
  const content_end = parser2.index;
  let ast;
  try {
    ast = parser$1(styles, {
      positions: true,
      offset: content_start
    });
  } catch (err) {
    if (err.name === "CssSyntaxError") {
      parser2.error({
        code: "css-syntax-error",
        message: err.message
      }, err.offset);
    } else {
      throw err;
    }
  }
  ast = JSON.parse(JSON.stringify(ast));
  walk(ast, {
    enter: (node2) => {
      if (node2.type === "Selector") {
        for (let i = 0; i < node2.children.length; i += 1) {
          const a = node2.children[i];
          const b = node2.children[i + 1];
          if (is_ref_selector(a, b)) {
            parser2.error({
              code: "invalid-ref-selector",
              message: "ref selectors are no longer supported"
            }, a.loc.start.offset);
          }
        }
      }
      if (node2.type === "Declaration" && node2.value.type === "Value" && node2.value.children.length === 0) {
        parser2.error({
          code: "invalid-declaration",
          message: "Declaration cannot be empty"
        }, node2.start);
      }
      if (node2.type === "PseudoClassSelector" && node2.name === "global" && node2.children === null) {
        parser2.error({
          code: "css-syntax-error",
          message: ":global() must contain a selector"
        }, node2.loc.start.offset);
      }
      if (node2.loc) {
        node2.start = node2.loc.start.offset;
        node2.end = node2.loc.end.offset;
        delete node2.loc;
      }
    }
  });
  parser2.eat("</style>", true);
  const end = parser2.index;
  return {
    type: "Style",
    start,
    end,
    attributes,
    children: ast.children,
    content: {
      start: content_start,
      end: content_end,
      styles
    }
  };
}
function is_ref_selector(a, b) {
  if (!b)
    return false;
  return a.type === "TypeSelector" && a.name === "ref" && b.type === "PseudoClassSelector";
}
var entities = {
  CounterClockwiseContourIntegral: 8755,
  ClockwiseContourIntegral: 8754,
  DoubleLongLeftRightArrow: 10234,
  DiacriticalDoubleAcute: 733,
  NotSquareSupersetEqual: 8931,
  CloseCurlyDoubleQuote: 8221,
  DoubleContourIntegral: 8751,
  FilledVerySmallSquare: 9642,
  NegativeVeryThinSpace: 8203,
  NotPrecedesSlantEqual: 8928,
  NotRightTriangleEqual: 8941,
  NotSucceedsSlantEqual: 8929,
  CapitalDifferentialD: 8517,
  DoubleLeftRightArrow: 8660,
  DoubleLongRightArrow: 10233,
  EmptyVerySmallSquare: 9643,
  NestedGreaterGreater: 8811,
  NotDoubleVerticalBar: 8742,
  NotLeftTriangleEqual: 8940,
  NotSquareSubsetEqual: 8930,
  OpenCurlyDoubleQuote: 8220,
  ReverseUpEquilibrium: 10607,
  DoubleLongLeftArrow: 10232,
  DownLeftRightVector: 10576,
  LeftArrowRightArrow: 8646,
  NegativeMediumSpace: 8203,
  RightArrowLeftArrow: 8644,
  SquareSupersetEqual: 8850,
  leftrightsquigarrow: 8621,
  DownRightTeeVector: 10591,
  DownRightVectorBar: 10583,
  LongLeftRightArrow: 10231,
  Longleftrightarrow: 10234,
  NegativeThickSpace: 8203,
  PrecedesSlantEqual: 8828,
  ReverseEquilibrium: 8651,
  RightDoubleBracket: 10215,
  RightDownTeeVector: 10589,
  RightDownVectorBar: 10581,
  RightTriangleEqual: 8885,
  SquareIntersection: 8851,
  SucceedsSlantEqual: 8829,
  blacktriangleright: 9656,
  longleftrightarrow: 10231,
  DoubleUpDownArrow: 8661,
  DoubleVerticalBar: 8741,
  DownLeftTeeVector: 10590,
  DownLeftVectorBar: 10582,
  FilledSmallSquare: 9724,
  GreaterSlantEqual: 10878,
  LeftDoubleBracket: 10214,
  LeftDownTeeVector: 10593,
  LeftDownVectorBar: 10585,
  LeftTriangleEqual: 8884,
  NegativeThinSpace: 8203,
  NotReverseElement: 8716,
  NotTildeFullEqual: 8775,
  RightAngleBracket: 10217,
  RightUpDownVector: 10575,
  SquareSubsetEqual: 8849,
  VerticalSeparator: 10072,
  blacktriangledown: 9662,
  blacktriangleleft: 9666,
  leftrightharpoons: 8651,
  rightleftharpoons: 8652,
  twoheadrightarrow: 8608,
  DiacriticalAcute: 180,
  DiacriticalGrave: 96,
  DiacriticalTilde: 732,
  DoubleRightArrow: 8658,
  DownArrowUpArrow: 8693,
  EmptySmallSquare: 9723,
  GreaterEqualLess: 8923,
  GreaterFullEqual: 8807,
  LeftAngleBracket: 10216,
  LeftUpDownVector: 10577,
  LessEqualGreater: 8922,
  NonBreakingSpace: 160,
  NotRightTriangle: 8939,
  NotSupersetEqual: 8841,
  RightTriangleBar: 10704,
  RightUpTeeVector: 10588,
  RightUpVectorBar: 10580,
  UnderParenthesis: 9181,
  UpArrowDownArrow: 8645,
  circlearrowright: 8635,
  downharpoonright: 8642,
  ntrianglerighteq: 8941,
  rightharpoondown: 8641,
  rightrightarrows: 8649,
  twoheadleftarrow: 8606,
  vartriangleright: 8883,
  CloseCurlyQuote: 8217,
  ContourIntegral: 8750,
  DoubleDownArrow: 8659,
  DoubleLeftArrow: 8656,
  DownRightVector: 8641,
  LeftRightVector: 10574,
  LeftTriangleBar: 10703,
  LeftUpTeeVector: 10592,
  LeftUpVectorBar: 10584,
  LowerRightArrow: 8600,
  NotGreaterEqual: 8817,
  NotGreaterTilde: 8821,
  NotLeftTriangle: 8938,
  OverParenthesis: 9180,
  RightDownVector: 8642,
  ShortRightArrow: 8594,
  UpperRightArrow: 8599,
  bigtriangledown: 9661,
  circlearrowleft: 8634,
  curvearrowright: 8631,
  downharpoonleft: 8643,
  leftharpoondown: 8637,
  leftrightarrows: 8646,
  nLeftrightarrow: 8654,
  nleftrightarrow: 8622,
  ntrianglelefteq: 8940,
  rightleftarrows: 8644,
  rightsquigarrow: 8605,
  rightthreetimes: 8908,
  straightepsilon: 1013,
  trianglerighteq: 8885,
  vartriangleleft: 8882,
  DiacriticalDot: 729,
  DoubleRightTee: 8872,
  DownLeftVector: 8637,
  GreaterGreater: 10914,
  HorizontalLine: 9472,
  InvisibleComma: 8291,
  InvisibleTimes: 8290,
  LeftDownVector: 8643,
  LeftRightArrow: 8596,
  Leftrightarrow: 8660,
  LessSlantEqual: 10877,
  LongRightArrow: 10230,
  Longrightarrow: 10233,
  LowerLeftArrow: 8601,
  NestedLessLess: 8810,
  NotGreaterLess: 8825,
  NotLessGreater: 8824,
  NotSubsetEqual: 8840,
  NotVerticalBar: 8740,
  OpenCurlyQuote: 8216,
  ReverseElement: 8715,
  RightTeeVector: 10587,
  RightVectorBar: 10579,
  ShortDownArrow: 8595,
  ShortLeftArrow: 8592,
  SquareSuperset: 8848,
  TildeFullEqual: 8773,
  UpperLeftArrow: 8598,
  ZeroWidthSpace: 8203,
  curvearrowleft: 8630,
  doublebarwedge: 8966,
  downdownarrows: 8650,
  hookrightarrow: 8618,
  leftleftarrows: 8647,
  leftrightarrow: 8596,
  leftthreetimes: 8907,
  longrightarrow: 10230,
  looparrowright: 8620,
  nshortparallel: 8742,
  ntriangleright: 8939,
  rightarrowtail: 8611,
  rightharpoonup: 8640,
  trianglelefteq: 8884,
  upharpoonright: 8638,
  ApplyFunction: 8289,
  DifferentialD: 8518,
  DoubleLeftTee: 10980,
  DoubleUpArrow: 8657,
  LeftTeeVector: 10586,
  LeftVectorBar: 10578,
  LessFullEqual: 8806,
  LongLeftArrow: 10229,
  Longleftarrow: 10232,
  NotTildeEqual: 8772,
  NotTildeTilde: 8777,
  Poincareplane: 8460,
  PrecedesEqual: 10927,
  PrecedesTilde: 8830,
  RightArrowBar: 8677,
  RightTeeArrow: 8614,
  RightTriangle: 8883,
  RightUpVector: 8638,
  SucceedsEqual: 10928,
  SucceedsTilde: 8831,
  SupersetEqual: 8839,
  UpEquilibrium: 10606,
  VerticalTilde: 8768,
  VeryThinSpace: 8202,
  bigtriangleup: 9651,
  blacktriangle: 9652,
  divideontimes: 8903,
  fallingdotseq: 8786,
  hookleftarrow: 8617,
  leftarrowtail: 8610,
  leftharpoonup: 8636,
  longleftarrow: 10229,
  looparrowleft: 8619,
  measuredangle: 8737,
  ntriangleleft: 8938,
  shortparallel: 8741,
  smallsetminus: 8726,
  triangleright: 9657,
  upharpoonleft: 8639,
  DownArrowBar: 10515,
  DownTeeArrow: 8615,
  ExponentialE: 8519,
  GreaterEqual: 8805,
  GreaterTilde: 8819,
  HilbertSpace: 8459,
  HumpDownHump: 8782,
  Intersection: 8898,
  LeftArrowBar: 8676,
  LeftTeeArrow: 8612,
  LeftTriangle: 8882,
  LeftUpVector: 8639,
  NotCongruent: 8802,
  NotLessEqual: 8816,
  NotLessTilde: 8820,
  Proportional: 8733,
  RightCeiling: 8969,
  RoundImplies: 10608,
  ShortUpArrow: 8593,
  SquareSubset: 8847,
  UnderBracket: 9141,
  VerticalLine: 124,
  blacklozenge: 10731,
  exponentiale: 8519,
  risingdotseq: 8787,
  triangledown: 9663,
  triangleleft: 9667,
  CircleMinus: 8854,
  CircleTimes: 8855,
  Equilibrium: 8652,
  GreaterLess: 8823,
  LeftCeiling: 8968,
  LessGreater: 8822,
  MediumSpace: 8287,
  NotPrecedes: 8832,
  NotSucceeds: 8833,
  OverBracket: 9140,
  RightVector: 8640,
  Rrightarrow: 8667,
  RuleDelayed: 10740,
  SmallCircle: 8728,
  SquareUnion: 8852,
  SubsetEqual: 8838,
  UpDownArrow: 8597,
  Updownarrow: 8661,
  VerticalBar: 8739,
  backepsilon: 1014,
  blacksquare: 9642,
  circledcirc: 8858,
  circleddash: 8861,
  curlyeqprec: 8926,
  curlyeqsucc: 8927,
  diamondsuit: 9830,
  eqslantless: 10901,
  expectation: 8496,
  nRightarrow: 8655,
  nrightarrow: 8603,
  preccurlyeq: 8828,
  precnapprox: 10937,
  quaternions: 8461,
  straightphi: 981,
  succcurlyeq: 8829,
  succnapprox: 10938,
  thickapprox: 8776,
  updownarrow: 8597,
  Bernoullis: 8492,
  CirclePlus: 8853,
  EqualTilde: 8770,
  Fouriertrf: 8497,
  ImaginaryI: 8520,
  Laplacetrf: 8466,
  LeftVector: 8636,
  Lleftarrow: 8666,
  NotElement: 8713,
  NotGreater: 8815,
  Proportion: 8759,
  RightArrow: 8594,
  RightFloor: 8971,
  Rightarrow: 8658,
  TildeEqual: 8771,
  TildeTilde: 8776,
  UnderBrace: 9183,
  UpArrowBar: 10514,
  UpTeeArrow: 8613,
  circledast: 8859,
  complement: 8705,
  curlywedge: 8911,
  eqslantgtr: 10902,
  gtreqqless: 10892,
  lessapprox: 10885,
  lesseqqgtr: 10891,
  lmoustache: 9136,
  longmapsto: 10236,
  mapstodown: 8615,
  mapstoleft: 8612,
  nLeftarrow: 8653,
  nleftarrow: 8602,
  precapprox: 10935,
  rightarrow: 8594,
  rmoustache: 9137,
  sqsubseteq: 8849,
  sqsupseteq: 8850,
  subsetneqq: 10955,
  succapprox: 10936,
  supsetneqq: 10956,
  upuparrows: 8648,
  varepsilon: 949,
  varnothing: 8709,
  Backslash: 8726,
  CenterDot: 183,
  CircleDot: 8857,
  Congruent: 8801,
  Coproduct: 8720,
  DoubleDot: 168,
  DownArrow: 8595,
  DownBreve: 785,
  Downarrow: 8659,
  HumpEqual: 8783,
  LeftArrow: 8592,
  LeftFloor: 8970,
  Leftarrow: 8656,
  LessTilde: 8818,
  Mellintrf: 8499,
  MinusPlus: 8723,
  NotCupCap: 8813,
  NotExists: 8708,
  OverBrace: 9182,
  PlusMinus: 177,
  Therefore: 8756,
  ThinSpace: 8201,
  TripleDot: 8411,
  UnionPlus: 8846,
  backprime: 8245,
  backsimeq: 8909,
  bigotimes: 10754,
  centerdot: 183,
  checkmark: 10003,
  complexes: 8450,
  dotsquare: 8865,
  downarrow: 8595,
  gtrapprox: 10886,
  gtreqless: 8923,
  heartsuit: 9829,
  leftarrow: 8592,
  lesseqgtr: 8922,
  nparallel: 8742,
  nshortmid: 8740,
  nsubseteq: 8840,
  nsupseteq: 8841,
  pitchfork: 8916,
  rationals: 8474,
  spadesuit: 9824,
  subseteqq: 10949,
  subsetneq: 8842,
  supseteqq: 10950,
  supsetneq: 8843,
  therefore: 8756,
  triangleq: 8796,
  varpropto: 8733,
  DDotrahd: 10513,
  DotEqual: 8784,
  Integral: 8747,
  LessLess: 10913,
  NotEqual: 8800,
  NotTilde: 8769,
  PartialD: 8706,
  Precedes: 8826,
  RightTee: 8866,
  Succeeds: 8827,
  SuchThat: 8715,
  Superset: 8835,
  Uarrocir: 10569,
  UnderBar: 818,
  andslope: 10840,
  angmsdaa: 10664,
  angmsdab: 10665,
  angmsdac: 10666,
  angmsdad: 10667,
  angmsdae: 10668,
  angmsdaf: 10669,
  angmsdag: 10670,
  angmsdah: 10671,
  angrtvbd: 10653,
  approxeq: 8778,
  awconint: 8755,
  backcong: 8780,
  barwedge: 8965,
  bbrktbrk: 9142,
  bigoplus: 10753,
  bigsqcup: 10758,
  biguplus: 10756,
  bigwedge: 8896,
  boxminus: 8863,
  boxtimes: 8864,
  capbrcup: 10825,
  circledR: 174,
  circledS: 9416,
  cirfnint: 10768,
  clubsuit: 9827,
  cupbrcap: 10824,
  curlyvee: 8910,
  cwconint: 8754,
  doteqdot: 8785,
  dotminus: 8760,
  drbkarow: 10512,
  dzigrarr: 10239,
  elinters: 9191,
  emptyset: 8709,
  eqvparsl: 10725,
  fpartint: 10765,
  geqslant: 10878,
  gesdotol: 10884,
  gnapprox: 10890,
  hksearow: 10533,
  hkswarow: 10534,
  imagline: 8464,
  imagpart: 8465,
  infintie: 10717,
  integers: 8484,
  intercal: 8890,
  intlarhk: 10775,
  laemptyv: 10676,
  ldrushar: 10571,
  leqslant: 10877,
  lesdotor: 10883,
  llcorner: 8990,
  lnapprox: 10889,
  lrcorner: 8991,
  lurdshar: 10570,
  mapstoup: 8613,
  multimap: 8888,
  naturals: 8469,
  otimesas: 10806,
  parallel: 8741,
  plusacir: 10787,
  pointint: 10773,
  precneqq: 10933,
  precnsim: 8936,
  profalar: 9006,
  profline: 8978,
  profsurf: 8979,
  raemptyv: 10675,
  realpart: 8476,
  rppolint: 10770,
  rtriltri: 10702,
  scpolint: 10771,
  setminus: 8726,
  shortmid: 8739,
  smeparsl: 10724,
  sqsubset: 8847,
  sqsupset: 8848,
  subseteq: 8838,
  succneqq: 10934,
  succnsim: 8937,
  supseteq: 8839,
  thetasym: 977,
  thicksim: 8764,
  timesbar: 10801,
  triangle: 9653,
  triminus: 10810,
  trpezium: 9186,
  ulcorner: 8988,
  urcorner: 8989,
  varkappa: 1008,
  varsigma: 962,
  vartheta: 977,
  Because: 8757,
  Cayleys: 8493,
  Cconint: 8752,
  Cedilla: 184,
  Diamond: 8900,
  DownTee: 8868,
  Element: 8712,
  Epsilon: 917,
  Implies: 8658,
  LeftTee: 8867,
  NewLine: 10,
  NoBreak: 8288,
  NotLess: 8814,
  Omicron: 927,
  OverBar: 175,
  Product: 8719,
  UpArrow: 8593,
  Uparrow: 8657,
  Upsilon: 933,
  alefsym: 8501,
  angrtvb: 8894,
  angzarr: 9084,
  asympeq: 8781,
  backsim: 8765,
  because: 8757,
  bemptyv: 10672,
  between: 8812,
  bigcirc: 9711,
  bigodot: 10752,
  bigstar: 9733,
  boxplus: 8862,
  ccupssm: 10832,
  cemptyv: 10674,
  cirscir: 10690,
  coloneq: 8788,
  congdot: 10861,
  cudarrl: 10552,
  cudarrr: 10549,
  cularrp: 10557,
  curarrm: 10556,
  dbkarow: 10511,
  ddagger: 8225,
  ddotseq: 10871,
  demptyv: 10673,
  diamond: 8900,
  digamma: 989,
  dotplus: 8724,
  dwangle: 10662,
  epsilon: 949,
  eqcolon: 8789,
  equivDD: 10872,
  gesdoto: 10882,
  gtquest: 10876,
  gtrless: 8823,
  harrcir: 10568,
  intprod: 10812,
  isindot: 8949,
  larrbfs: 10527,
  larrsim: 10611,
  lbrksld: 10639,
  lbrkslu: 10637,
  ldrdhar: 10599,
  lesdoto: 10881,
  lessdot: 8918,
  lessgtr: 8822,
  lesssim: 8818,
  lotimes: 10804,
  lozenge: 9674,
  ltquest: 10875,
  luruhar: 10598,
  maltese: 10016,
  minusdu: 10794,
  napprox: 8777,
  natural: 9838,
  nearrow: 8599,
  nexists: 8708,
  notinva: 8713,
  notinvb: 8951,
  notinvc: 8950,
  notniva: 8716,
  notnivb: 8958,
  notnivc: 8957,
  npolint: 10772,
  nsqsube: 8930,
  nsqsupe: 8931,
  nvinfin: 10718,
  nwarrow: 8598,
  olcross: 10683,
  omicron: 959,
  orderof: 8500,
  orslope: 10839,
  pertenk: 8241,
  planckh: 8462,
  pluscir: 10786,
  plussim: 10790,
  plustwo: 10791,
  precsim: 8830,
  quatint: 10774,
  questeq: 8799,
  rarrbfs: 10528,
  rarrsim: 10612,
  rbrksld: 10638,
  rbrkslu: 10640,
  rdldhar: 10601,
  realine: 8475,
  rotimes: 10805,
  ruluhar: 10600,
  searrow: 8600,
  simplus: 10788,
  simrarr: 10610,
  subedot: 10947,
  submult: 10945,
  subplus: 10943,
  subrarr: 10617,
  succsim: 8831,
  supdsub: 10968,
  supedot: 10948,
  suphsub: 10967,
  suplarr: 10619,
  supmult: 10946,
  supplus: 10944,
  swarrow: 8601,
  topfork: 10970,
  triplus: 10809,
  tritime: 10811,
  uparrow: 8593,
  upsilon: 965,
  uwangle: 10663,
  vzigzag: 10650,
  zigrarr: 8669,
  Aacute: 193,
  Abreve: 258,
  Agrave: 192,
  Assign: 8788,
  Atilde: 195,
  Barwed: 8966,
  Bumpeq: 8782,
  Cacute: 262,
  Ccaron: 268,
  Ccedil: 199,
  Colone: 10868,
  Conint: 8751,
  CupCap: 8781,
  Dagger: 8225,
  Dcaron: 270,
  DotDot: 8412,
  Dstrok: 272,
  Eacute: 201,
  Ecaron: 282,
  Egrave: 200,
  Exists: 8707,
  ForAll: 8704,
  Gammad: 988,
  Gbreve: 286,
  Gcedil: 290,
  HARDcy: 1066,
  Hstrok: 294,
  Iacute: 205,
  Igrave: 204,
  Itilde: 296,
  Jsercy: 1032,
  Kcedil: 310,
  Lacute: 313,
  Lambda: 923,
  Lcaron: 317,
  Lcedil: 315,
  Lmidot: 319,
  Lstrok: 321,
  Nacute: 323,
  Ncaron: 327,
  Ncedil: 325,
  Ntilde: 209,
  Oacute: 211,
  Odblac: 336,
  Ograve: 210,
  Oslash: 216,
  Otilde: 213,
  Otimes: 10807,
  Racute: 340,
  Rarrtl: 10518,
  Rcaron: 344,
  Rcedil: 342,
  SHCHcy: 1065,
  SOFTcy: 1068,
  Sacute: 346,
  Scaron: 352,
  Scedil: 350,
  Square: 9633,
  Subset: 8912,
  Supset: 8913,
  Tcaron: 356,
  Tcedil: 354,
  Tstrok: 358,
  Uacute: 218,
  Ubreve: 364,
  Udblac: 368,
  Ugrave: 217,
  Utilde: 360,
  Vdashl: 10982,
  Verbar: 8214,
  Vvdash: 8874,
  Yacute: 221,
  Zacute: 377,
  Zcaron: 381,
  aacute: 225,
  abreve: 259,
  agrave: 224,
  andand: 10837,
  angmsd: 8737,
  angsph: 8738,
  apacir: 10863,
  approx: 8776,
  atilde: 227,
  barvee: 8893,
  barwed: 8965,
  becaus: 8757,
  bernou: 8492,
  bigcap: 8898,
  bigcup: 8899,
  bigvee: 8897,
  bkarow: 10509,
  bottom: 8869,
  bowtie: 8904,
  boxbox: 10697,
  bprime: 8245,
  brvbar: 166,
  bullet: 8226,
  bumpeq: 8783,
  cacute: 263,
  capand: 10820,
  capcap: 10827,
  capcup: 10823,
  capdot: 10816,
  ccaron: 269,
  ccedil: 231,
  circeq: 8791,
  cirmid: 10991,
  colone: 8788,
  commat: 64,
  compfn: 8728,
  conint: 8750,
  coprod: 8720,
  copysr: 8471,
  cularr: 8630,
  cupcap: 10822,
  cupcup: 10826,
  cupdot: 8845,
  curarr: 8631,
  curren: 164,
  cylcty: 9005,
  dagger: 8224,
  daleth: 8504,
  dcaron: 271,
  dfisht: 10623,
  divide: 247,
  divonx: 8903,
  dlcorn: 8990,
  dlcrop: 8973,
  dollar: 36,
  drcorn: 8991,
  drcrop: 8972,
  dstrok: 273,
  eacute: 233,
  easter: 10862,
  ecaron: 283,
  ecolon: 8789,
  egrave: 232,
  egsdot: 10904,
  elsdot: 10903,
  emptyv: 8709,
  emsp13: 8196,
  emsp14: 8197,
  eparsl: 10723,
  eqcirc: 8790,
  equals: 61,
  equest: 8799,
  female: 9792,
  ffilig: 64259,
  ffllig: 64260,
  forall: 8704,
  frac12: 189,
  frac13: 8531,
  frac14: 188,
  frac15: 8533,
  frac16: 8537,
  frac18: 8539,
  frac23: 8532,
  frac25: 8534,
  frac34: 190,
  frac35: 8535,
  frac38: 8540,
  frac45: 8536,
  frac56: 8538,
  frac58: 8541,
  frac78: 8542,
  gacute: 501,
  gammad: 989,
  gbreve: 287,
  gesdot: 10880,
  gesles: 10900,
  gtlPar: 10645,
  gtrarr: 10616,
  gtrdot: 8919,
  gtrsim: 8819,
  hairsp: 8202,
  hamilt: 8459,
  hardcy: 1098,
  hearts: 9829,
  hellip: 8230,
  hercon: 8889,
  homtht: 8763,
  horbar: 8213,
  hslash: 8463,
  hstrok: 295,
  hybull: 8259,
  hyphen: 8208,
  iacute: 237,
  igrave: 236,
  iiiint: 10764,
  iinfin: 10716,
  incare: 8453,
  inodot: 305,
  intcal: 8890,
  iquest: 191,
  isinsv: 8947,
  itilde: 297,
  jsercy: 1112,
  kappav: 1008,
  kcedil: 311,
  kgreen: 312,
  lAtail: 10523,
  lacute: 314,
  lagran: 8466,
  lambda: 955,
  langle: 10216,
  larrfs: 10525,
  larrhk: 8617,
  larrlp: 8619,
  larrpl: 10553,
  larrtl: 8610,
  latail: 10521,
  lbrace: 123,
  lbrack: 91,
  lcaron: 318,
  lcedil: 316,
  ldquor: 8222,
  lesdot: 10879,
  lesges: 10899,
  lfisht: 10620,
  lfloor: 8970,
  lharul: 10602,
  llhard: 10603,
  lmidot: 320,
  lmoust: 9136,
  loplus: 10797,
  lowast: 8727,
  lowbar: 95,
  lparlt: 10643,
  lrhard: 10605,
  lsaquo: 8249,
  lsquor: 8218,
  lstrok: 322,
  lthree: 8907,
  ltimes: 8905,
  ltlarr: 10614,
  ltrPar: 10646,
  mapsto: 8614,
  marker: 9646,
  mcomma: 10793,
  midast: 42,
  midcir: 10992,
  middot: 183,
  minusb: 8863,
  minusd: 8760,
  mnplus: 8723,
  models: 8871,
  mstpos: 8766,
  nVDash: 8879,
  nVdash: 8878,
  nacute: 324,
  ncaron: 328,
  ncedil: 326,
  nearhk: 10532,
  nequiv: 8802,
  nesear: 10536,
  nexist: 8708,
  nltrie: 8940,
  nprcue: 8928,
  nrtrie: 8941,
  nsccue: 8929,
  nsimeq: 8772,
  ntilde: 241,
  numero: 8470,
  nvDash: 8877,
  nvHarr: 10500,
  nvdash: 8876,
  nvlArr: 10498,
  nvrArr: 10499,
  nwarhk: 10531,
  nwnear: 10535,
  oacute: 243,
  odblac: 337,
  odsold: 10684,
  ograve: 242,
  ominus: 8854,
  origof: 8886,
  oslash: 248,
  otilde: 245,
  otimes: 8855,
  parsim: 10995,
  percnt: 37,
  period: 46,
  permil: 8240,
  phmmat: 8499,
  planck: 8463,
  plankv: 8463,
  plusdo: 8724,
  plusdu: 10789,
  plusmn: 177,
  preceq: 10927,
  primes: 8473,
  prnsim: 8936,
  propto: 8733,
  prurel: 8880,
  puncsp: 8200,
  qprime: 8279,
  rAtail: 10524,
  racute: 341,
  rangle: 10217,
  rarrap: 10613,
  rarrfs: 10526,
  rarrhk: 8618,
  rarrlp: 8620,
  rarrpl: 10565,
  rarrtl: 8611,
  ratail: 10522,
  rbrace: 125,
  rbrack: 93,
  rcaron: 345,
  rcedil: 343,
  rdquor: 8221,
  rfisht: 10621,
  rfloor: 8971,
  rharul: 10604,
  rmoust: 9137,
  roplus: 10798,
  rpargt: 10644,
  rsaquo: 8250,
  rsquor: 8217,
  rthree: 8908,
  rtimes: 8906,
  sacute: 347,
  scaron: 353,
  scedil: 351,
  scnsim: 8937,
  searhk: 10533,
  seswar: 10537,
  sfrown: 8994,
  shchcy: 1097,
  sigmaf: 962,
  sigmav: 962,
  simdot: 10858,
  smashp: 10803,
  softcy: 1100,
  solbar: 9023,
  spades: 9824,
  sqsube: 8849,
  sqsupe: 8850,
  square: 9633,
  squarf: 9642,
  ssetmn: 8726,
  ssmile: 8995,
  sstarf: 8902,
  subdot: 10941,
  subset: 8834,
  subsim: 10951,
  subsub: 10965,
  subsup: 10963,
  succeq: 10928,
  supdot: 10942,
  supset: 8835,
  supsim: 10952,
  supsub: 10964,
  supsup: 10966,
  swarhk: 10534,
  swnwar: 10538,
  target: 8982,
  tcaron: 357,
  tcedil: 355,
  telrec: 8981,
  there4: 8756,
  thetav: 977,
  thinsp: 8201,
  thksim: 8764,
  timesb: 8864,
  timesd: 10800,
  topbot: 9014,
  topcir: 10993,
  tprime: 8244,
  tridot: 9708,
  tstrok: 359,
  uacute: 250,
  ubreve: 365,
  udblac: 369,
  ufisht: 10622,
  ugrave: 249,
  ulcorn: 8988,
  ulcrop: 8975,
  urcorn: 8989,
  urcrop: 8974,
  utilde: 361,
  vangrt: 10652,
  varphi: 966,
  varrho: 1009,
  veebar: 8891,
  vellip: 8942,
  verbar: 124,
  wedbar: 10847,
  wedgeq: 8793,
  weierp: 8472,
  wreath: 8768,
  xoplus: 10753,
  xotime: 10754,
  xsqcup: 10758,
  xuplus: 10756,
  xwedge: 8896,
  yacute: 253,
  zacute: 378,
  zcaron: 382,
  zeetrf: 8488,
  AElig: 198,
  Acirc: 194,
  Alpha: 913,
  Amacr: 256,
  Aogon: 260,
  Aring: 197,
  Breve: 728,
  Ccirc: 264,
  Colon: 8759,
  Cross: 10799,
  Dashv: 10980,
  Delta: 916,
  Ecirc: 202,
  Emacr: 274,
  Eogon: 280,
  Equal: 10869,
  Gamma: 915,
  Gcirc: 284,
  Hacek: 711,
  Hcirc: 292,
  IJlig: 306,
  Icirc: 206,
  Imacr: 298,
  Iogon: 302,
  Iukcy: 1030,
  Jcirc: 308,
  Jukcy: 1028,
  Kappa: 922,
  OElig: 338,
  Ocirc: 212,
  Omacr: 332,
  Omega: 937,
  Prime: 8243,
  RBarr: 10512,
  Scirc: 348,
  Sigma: 931,
  THORN: 222,
  TRADE: 8482,
  TSHcy: 1035,
  Theta: 920,
  Tilde: 8764,
  Ubrcy: 1038,
  Ucirc: 219,
  Umacr: 362,
  Union: 8899,
  Uogon: 370,
  UpTee: 8869,
  Uring: 366,
  VDash: 8875,
  Vdash: 8873,
  Wcirc: 372,
  Wedge: 8896,
  Ycirc: 374,
  acirc: 226,
  acute: 180,
  aelig: 230,
  aleph: 8501,
  alpha: 945,
  amacr: 257,
  amalg: 10815,
  angle: 8736,
  angrt: 8735,
  angst: 8491,
  aogon: 261,
  aring: 229,
  asymp: 8776,
  awint: 10769,
  bcong: 8780,
  bdquo: 8222,
  bepsi: 1014,
  blank: 9251,
  blk12: 9618,
  blk14: 9617,
  blk34: 9619,
  block: 9608,
  boxDL: 9559,
  boxDR: 9556,
  boxDl: 9558,
  boxDr: 9555,
  boxHD: 9574,
  boxHU: 9577,
  boxHd: 9572,
  boxHu: 9575,
  boxUL: 9565,
  boxUR: 9562,
  boxUl: 9564,
  boxUr: 9561,
  boxVH: 9580,
  boxVL: 9571,
  boxVR: 9568,
  boxVh: 9579,
  boxVl: 9570,
  boxVr: 9567,
  boxdL: 9557,
  boxdR: 9554,
  boxdl: 9488,
  boxdr: 9484,
  boxhD: 9573,
  boxhU: 9576,
  boxhd: 9516,
  boxhu: 9524,
  boxuL: 9563,
  boxuR: 9560,
  boxul: 9496,
  boxur: 9492,
  boxvH: 9578,
  boxvL: 9569,
  boxvR: 9566,
  boxvh: 9532,
  boxvl: 9508,
  boxvr: 9500,
  breve: 728,
  bsemi: 8271,
  bsime: 8909,
  bsolb: 10693,
  bumpE: 10926,
  bumpe: 8783,
  caret: 8257,
  caron: 711,
  ccaps: 10829,
  ccirc: 265,
  ccups: 10828,
  cedil: 184,
  check: 10003,
  clubs: 9827,
  colon: 58,
  comma: 44,
  crarr: 8629,
  cross: 10007,
  csube: 10961,
  csupe: 10962,
  ctdot: 8943,
  cuepr: 8926,
  cuesc: 8927,
  cupor: 10821,
  cuvee: 8910,
  cuwed: 8911,
  cwint: 8753,
  dashv: 8867,
  dblac: 733,
  ddarr: 8650,
  delta: 948,
  dharl: 8643,
  dharr: 8642,
  diams: 9830,
  disin: 8946,
  doteq: 8784,
  dtdot: 8945,
  dtrif: 9662,
  duarr: 8693,
  duhar: 10607,
  eDDot: 10871,
  ecirc: 234,
  efDot: 8786,
  emacr: 275,
  empty: 8709,
  eogon: 281,
  eplus: 10865,
  epsiv: 949,
  eqsim: 8770,
  equiv: 8801,
  erDot: 8787,
  erarr: 10609,
  esdot: 8784,
  exist: 8707,
  fflig: 64256,
  filig: 64257,
  fllig: 64258,
  fltns: 9649,
  forkv: 10969,
  frasl: 8260,
  frown: 8994,
  gamma: 947,
  gcirc: 285,
  gescc: 10921,
  gimel: 8503,
  gneqq: 8809,
  gnsim: 8935,
  grave: 96,
  gsime: 10894,
  gsiml: 10896,
  gtcir: 10874,
  gtdot: 8919,
  harrw: 8621,
  hcirc: 293,
  hoarr: 8703,
  icirc: 238,
  iexcl: 161,
  iiint: 8749,
  iiota: 8489,
  ijlig: 307,
  imacr: 299,
  image: 8465,
  imath: 305,
  imped: 437,
  infin: 8734,
  iogon: 303,
  iprod: 10812,
  isinE: 8953,
  isins: 8948,
  isinv: 8712,
  iukcy: 1110,
  jcirc: 309,
  jmath: 567,
  jukcy: 1108,
  kappa: 954,
  lAarr: 8666,
  lBarr: 10510,
  langd: 10641,
  laquo: 171,
  larrb: 8676,
  lbarr: 10508,
  lbbrk: 10098,
  lbrke: 10635,
  lceil: 8968,
  ldquo: 8220,
  lescc: 10920,
  lhard: 8637,
  lharu: 8636,
  lhblk: 9604,
  llarr: 8647,
  lltri: 9722,
  lneqq: 8808,
  lnsim: 8934,
  loang: 10220,
  loarr: 8701,
  lobrk: 10214,
  lopar: 10629,
  lrarr: 8646,
  lrhar: 8651,
  lrtri: 8895,
  lsime: 10893,
  lsimg: 10895,
  lsquo: 8216,
  ltcir: 10873,
  ltdot: 8918,
  ltrie: 8884,
  ltrif: 9666,
  mDDot: 8762,
  mdash: 8212,
  micro: 181,
  minus: 8722,
  mumap: 8888,
  nabla: 8711,
  napos: 329,
  natur: 9838,
  ncong: 8775,
  ndash: 8211,
  neArr: 8663,
  nearr: 8599,
  ngsim: 8821,
  nhArr: 8654,
  nharr: 8622,
  nhpar: 10994,
  nlArr: 8653,
  nlarr: 8602,
  nless: 8814,
  nlsim: 8820,
  nltri: 8938,
  notin: 8713,
  notni: 8716,
  nprec: 8832,
  nrArr: 8655,
  nrarr: 8603,
  nrtri: 8939,
  nsime: 8772,
  nsmid: 8740,
  nspar: 8742,
  nsube: 8840,
  nsucc: 8833,
  nsupe: 8841,
  numsp: 8199,
  nwArr: 8662,
  nwarr: 8598,
  ocirc: 244,
  odash: 8861,
  oelig: 339,
  ofcir: 10687,
  ohbar: 10677,
  olarr: 8634,
  olcir: 10686,
  oline: 8254,
  omacr: 333,
  omega: 969,
  operp: 10681,
  oplus: 8853,
  orarr: 8635,
  order: 8500,
  ovbar: 9021,
  parsl: 11005,
  phone: 9742,
  plusb: 8862,
  pluse: 10866,
  pound: 163,
  prcue: 8828,
  prime: 8242,
  prnap: 10937,
  prsim: 8830,
  quest: 63,
  rAarr: 8667,
  rBarr: 10511,
  radic: 8730,
  rangd: 10642,
  range: 10661,
  raquo: 187,
  rarrb: 8677,
  rarrc: 10547,
  rarrw: 8605,
  ratio: 8758,
  rbarr: 10509,
  rbbrk: 10099,
  rbrke: 10636,
  rceil: 8969,
  rdquo: 8221,
  reals: 8477,
  rhard: 8641,
  rharu: 8640,
  rlarr: 8644,
  rlhar: 8652,
  rnmid: 10990,
  roang: 10221,
  roarr: 8702,
  robrk: 10215,
  ropar: 10630,
  rrarr: 8649,
  rsquo: 8217,
  rtrie: 8885,
  rtrif: 9656,
  sbquo: 8218,
  sccue: 8829,
  scirc: 349,
  scnap: 10938,
  scsim: 8831,
  sdotb: 8865,
  sdote: 10854,
  seArr: 8664,
  searr: 8600,
  setmn: 8726,
  sharp: 9839,
  sigma: 963,
  simeq: 8771,
  simgE: 10912,
  simlE: 10911,
  simne: 8774,
  slarr: 8592,
  smile: 8995,
  sqcap: 8851,
  sqcup: 8852,
  sqsub: 8847,
  sqsup: 8848,
  srarr: 8594,
  starf: 9733,
  strns: 175,
  subnE: 10955,
  subne: 8842,
  supnE: 10956,
  supne: 8843,
  swArr: 8665,
  swarr: 8601,
  szlig: 223,
  theta: 952,
  thkap: 8776,
  thorn: 254,
  tilde: 732,
  times: 215,
  trade: 8482,
  trisb: 10701,
  tshcy: 1115,
  twixt: 8812,
  ubrcy: 1118,
  ucirc: 251,
  udarr: 8645,
  udhar: 10606,
  uharl: 8639,
  uharr: 8638,
  uhblk: 9600,
  ultri: 9720,
  umacr: 363,
  uogon: 371,
  uplus: 8846,
  upsih: 978,
  uring: 367,
  urtri: 9721,
  utdot: 8944,
  utrif: 9652,
  uuarr: 8648,
  vBarv: 10985,
  vDash: 8872,
  varpi: 982,
  vdash: 8866,
  veeeq: 8794,
  vltri: 8882,
  vprop: 8733,
  vrtri: 8883,
  wcirc: 373,
  wedge: 8743,
  xcirc: 9711,
  xdtri: 9661,
  xhArr: 10234,
  xharr: 10231,
  xlArr: 10232,
  xlarr: 10229,
  xodot: 10752,
  xrArr: 10233,
  xrarr: 10230,
  xutri: 9651,
  ycirc: 375,
  Aopf: 120120,
  Ascr: 119964,
  Auml: 196,
  Barv: 10983,
  Beta: 914,
  Bopf: 120121,
  Bscr: 8492,
  CHcy: 1063,
  COPY: 169,
  Cdot: 266,
  Copf: 8450,
  Cscr: 119966,
  DJcy: 1026,
  DScy: 1029,
  DZcy: 1039,
  Darr: 8609,
  Dopf: 120123,
  Dscr: 119967,
  Edot: 278,
  Eopf: 120124,
  Escr: 8496,
  Esim: 10867,
  Euml: 203,
  Fopf: 120125,
  Fscr: 8497,
  GJcy: 1027,
  Gdot: 288,
  Gopf: 120126,
  Gscr: 119970,
  Hopf: 8461,
  Hscr: 8459,
  IEcy: 1045,
  IOcy: 1025,
  Idot: 304,
  Iopf: 120128,
  Iota: 921,
  Iscr: 8464,
  Iuml: 207,
  Jopf: 120129,
  Jscr: 119973,
  KHcy: 1061,
  KJcy: 1036,
  Kopf: 120130,
  Kscr: 119974,
  LJcy: 1033,
  Lang: 10218,
  Larr: 8606,
  Lopf: 120131,
  Lscr: 8466,
  Mopf: 120132,
  Mscr: 8499,
  NJcy: 1034,
  Nopf: 8469,
  Nscr: 119977,
  Oopf: 120134,
  Oscr: 119978,
  Ouml: 214,
  Popf: 8473,
  Pscr: 119979,
  QUOT: 34,
  Qopf: 8474,
  Qscr: 119980,
  Rang: 10219,
  Rarr: 8608,
  Ropf: 8477,
  Rscr: 8475,
  SHcy: 1064,
  Sopf: 120138,
  Sqrt: 8730,
  Sscr: 119982,
  Star: 8902,
  TScy: 1062,
  Topf: 120139,
  Tscr: 119983,
  Uarr: 8607,
  Uopf: 120140,
  Upsi: 978,
  Uscr: 119984,
  Uuml: 220,
  Vbar: 10987,
  Vert: 8214,
  Vopf: 120141,
  Vscr: 119985,
  Wopf: 120142,
  Wscr: 119986,
  Xopf: 120143,
  Xscr: 119987,
  YAcy: 1071,
  YIcy: 1031,
  YUcy: 1070,
  Yopf: 120144,
  Yscr: 119988,
  Yuml: 376,
  ZHcy: 1046,
  Zdot: 379,
  Zeta: 918,
  Zopf: 8484,
  Zscr: 119989,
  andd: 10844,
  andv: 10842,
  ange: 10660,
  aopf: 120146,
  apid: 8779,
  apos: 39,
  ascr: 119990,
  auml: 228,
  bNot: 10989,
  bbrk: 9141,
  beta: 946,
  beth: 8502,
  bnot: 8976,
  bopf: 120147,
  boxH: 9552,
  boxV: 9553,
  boxh: 9472,
  boxv: 9474,
  bscr: 119991,
  bsim: 8765,
  bsol: 92,
  bull: 8226,
  bump: 8782,
  cdot: 267,
  cent: 162,
  chcy: 1095,
  cirE: 10691,
  circ: 710,
  cire: 8791,
  comp: 8705,
  cong: 8773,
  copf: 120148,
  copy: 169,
  cscr: 119992,
  csub: 10959,
  csup: 10960,
  dArr: 8659,
  dHar: 10597,
  darr: 8595,
  dash: 8208,
  diam: 8900,
  djcy: 1106,
  dopf: 120149,
  dscr: 119993,
  dscy: 1109,
  dsol: 10742,
  dtri: 9663,
  dzcy: 1119,
  eDot: 8785,
  ecir: 8790,
  edot: 279,
  emsp: 8195,
  ensp: 8194,
  eopf: 120150,
  epar: 8917,
  epsi: 1013,
  escr: 8495,
  esim: 8770,
  euml: 235,
  euro: 8364,
  excl: 33,
  flat: 9837,
  fnof: 402,
  fopf: 120151,
  fork: 8916,
  fscr: 119995,
  gdot: 289,
  geqq: 8807,
  gjcy: 1107,
  gnap: 10890,
  gneq: 10888,
  gopf: 120152,
  gscr: 8458,
  gsim: 8819,
  gtcc: 10919,
  hArr: 8660,
  half: 189,
  harr: 8596,
  hbar: 8463,
  hopf: 120153,
  hscr: 119997,
  iecy: 1077,
  imof: 8887,
  iocy: 1105,
  iopf: 120154,
  iota: 953,
  iscr: 119998,
  isin: 8712,
  iuml: 239,
  jopf: 120155,
  jscr: 119999,
  khcy: 1093,
  kjcy: 1116,
  kopf: 120156,
  kscr: 12e4,
  lArr: 8656,
  lHar: 10594,
  lang: 10216,
  larr: 8592,
  late: 10925,
  lcub: 123,
  ldca: 10550,
  ldsh: 8626,
  leqq: 8806,
  ljcy: 1113,
  lnap: 10889,
  lneq: 10887,
  lopf: 120157,
  lozf: 10731,
  lpar: 40,
  lscr: 120001,
  lsim: 8818,
  lsqb: 91,
  ltcc: 10918,
  ltri: 9667,
  macr: 175,
  male: 9794,
  malt: 10016,
  mlcp: 10971,
  mldr: 8230,
  mopf: 120158,
  mscr: 120002,
  nbsp: 160,
  ncap: 10819,
  ncup: 10818,
  ngeq: 8817,
  ngtr: 8815,
  nisd: 8954,
  njcy: 1114,
  nldr: 8229,
  nleq: 8816,
  nmid: 8740,
  nopf: 120159,
  npar: 8742,
  nscr: 120003,
  nsim: 8769,
  nsub: 8836,
  nsup: 8837,
  ntgl: 8825,
  ntlg: 8824,
  oast: 8859,
  ocir: 8858,
  odiv: 10808,
  odot: 8857,
  ogon: 731,
  oint: 8750,
  omid: 10678,
  oopf: 120160,
  opar: 10679,
  ordf: 170,
  ordm: 186,
  oror: 10838,
  oscr: 8500,
  osol: 8856,
  ouml: 246,
  para: 182,
  part: 8706,
  perp: 8869,
  phiv: 966,
  plus: 43,
  popf: 120161,
  prap: 10935,
  prec: 8826,
  prnE: 10933,
  prod: 8719,
  prop: 8733,
  pscr: 120005,
  qint: 10764,
  qopf: 120162,
  qscr: 120006,
  quot: 34,
  rArr: 8658,
  rHar: 10596,
  race: 10714,
  rang: 10217,
  rarr: 8594,
  rcub: 125,
  rdca: 10551,
  rdsh: 8627,
  real: 8476,
  rect: 9645,
  rhov: 1009,
  ring: 730,
  ropf: 120163,
  rpar: 41,
  rscr: 120007,
  rsqb: 93,
  rtri: 9657,
  scap: 10936,
  scnE: 10934,
  sdot: 8901,
  sect: 167,
  semi: 59,
  sext: 10038,
  shcy: 1096,
  sime: 8771,
  simg: 10910,
  siml: 10909,
  smid: 8739,
  smte: 10924,
  solb: 10692,
  sopf: 120164,
  spar: 8741,
  squf: 9642,
  sscr: 120008,
  star: 9734,
  subE: 10949,
  sube: 8838,
  succ: 8827,
  sung: 9834,
  sup1: 185,
  sup2: 178,
  sup3: 179,
  supE: 10950,
  supe: 8839,
  tbrk: 9140,
  tdot: 8411,
  tint: 8749,
  toea: 10536,
  topf: 120165,
  tosa: 10537,
  trie: 8796,
  tscr: 120009,
  tscy: 1094,
  uArr: 8657,
  uHar: 10595,
  uarr: 8593,
  uopf: 120166,
  upsi: 965,
  uscr: 120010,
  utri: 9653,
  uuml: 252,
  vArr: 8661,
  vBar: 10984,
  varr: 8597,
  vert: 124,
  vopf: 120167,
  vscr: 120011,
  wopf: 120168,
  wscr: 120012,
  xcap: 8898,
  xcup: 8899,
  xmap: 10236,
  xnis: 8955,
  xopf: 120169,
  xscr: 120013,
  xvee: 8897,
  yacy: 1103,
  yicy: 1111,
  yopf: 120170,
  yscr: 120014,
  yucy: 1102,
  yuml: 255,
  zdot: 380,
  zeta: 950,
  zhcy: 1078,
  zopf: 120171,
  zscr: 120015,
  zwnj: 8204,
  AMP: 38,
  Acy: 1040,
  Afr: 120068,
  And: 10835,
  Bcy: 1041,
  Bfr: 120069,
  Cap: 8914,
  Cfr: 8493,
  Chi: 935,
  Cup: 8915,
  Dcy: 1044,
  Del: 8711,
  Dfr: 120071,
  Dot: 168,
  ENG: 330,
  ETH: 208,
  Ecy: 1069,
  Efr: 120072,
  Eta: 919,
  Fcy: 1060,
  Ffr: 120073,
  Gcy: 1043,
  Gfr: 120074,
  Hat: 94,
  Hfr: 8460,
  Icy: 1048,
  Ifr: 8465,
  Int: 8748,
  Jcy: 1049,
  Jfr: 120077,
  Kcy: 1050,
  Kfr: 120078,
  Lcy: 1051,
  Lfr: 120079,
  Lsh: 8624,
  Map: 10501,
  Mcy: 1052,
  Mfr: 120080,
  Ncy: 1053,
  Nfr: 120081,
  Not: 10988,
  Ocy: 1054,
  Ofr: 120082,
  Pcy: 1055,
  Pfr: 120083,
  Phi: 934,
  Psi: 936,
  Qfr: 120084,
  REG: 174,
  Rcy: 1056,
  Rfr: 8476,
  Rho: 929,
  Rsh: 8625,
  Scy: 1057,
  Sfr: 120086,
  Sub: 8912,
  Sum: 8721,
  Sup: 8913,
  Tab: 9,
  Tau: 932,
  Tcy: 1058,
  Tfr: 120087,
  Ucy: 1059,
  Ufr: 120088,
  Vcy: 1042,
  Vee: 8897,
  Vfr: 120089,
  Wfr: 120090,
  Xfr: 120091,
  Ycy: 1067,
  Yfr: 120092,
  Zcy: 1047,
  Zfr: 8488,
  acd: 8767,
  acy: 1072,
  afr: 120094,
  amp: 38,
  and: 8743,
  ang: 8736,
  apE: 10864,
  ape: 8778,
  ast: 42,
  bcy: 1073,
  bfr: 120095,
  bot: 8869,
  cap: 8745,
  cfr: 120096,
  chi: 967,
  cir: 9675,
  cup: 8746,
  dcy: 1076,
  deg: 176,
  dfr: 120097,
  die: 168,
  div: 247,
  dot: 729,
  ecy: 1101,
  efr: 120098,
  egs: 10902,
  ell: 8467,
  els: 10901,
  eng: 331,
  eta: 951,
  eth: 240,
  fcy: 1092,
  ffr: 120099,
  gEl: 10892,
  gap: 10886,
  gcy: 1075,
  gel: 8923,
  geq: 8805,
  ges: 10878,
  gfr: 120100,
  ggg: 8921,
  glE: 10898,
  gla: 10917,
  glj: 10916,
  gnE: 8809,
  gne: 10888,
  hfr: 120101,
  icy: 1080,
  iff: 8660,
  ifr: 120102,
  int: 8747,
  jcy: 1081,
  jfr: 120103,
  kcy: 1082,
  kfr: 120104,
  lEg: 10891,
  lap: 10885,
  lat: 10923,
  lcy: 1083,
  leg: 8922,
  leq: 8804,
  les: 10877,
  lfr: 120105,
  lgE: 10897,
  lnE: 8808,
  lne: 10887,
  loz: 9674,
  lrm: 8206,
  lsh: 8624,
  map: 8614,
  mcy: 1084,
  mfr: 120106,
  mho: 8487,
  mid: 8739,
  nap: 8777,
  ncy: 1085,
  nfr: 120107,
  nge: 8817,
  ngt: 8815,
  nis: 8956,
  niv: 8715,
  nle: 8816,
  nlt: 8814,
  not: 172,
  npr: 8832,
  nsc: 8833,
  num: 35,
  ocy: 1086,
  ofr: 120108,
  ogt: 10689,
  ohm: 8486,
  olt: 10688,
  ord: 10845,
  orv: 10843,
  par: 8741,
  pcy: 1087,
  pfr: 120109,
  phi: 966,
  piv: 982,
  prE: 10931,
  pre: 10927,
  psi: 968,
  qfr: 120110,
  rcy: 1088,
  reg: 174,
  rfr: 120111,
  rho: 961,
  rlm: 8207,
  rsh: 8625,
  scE: 10932,
  sce: 10928,
  scy: 1089,
  sfr: 120112,
  shy: 173,
  sim: 8764,
  smt: 10922,
  sol: 47,
  squ: 9633,
  sub: 8834,
  sum: 8721,
  sup: 8835,
  tau: 964,
  tcy: 1090,
  tfr: 120113,
  top: 8868,
  ucy: 1091,
  ufr: 120114,
  uml: 168,
  vcy: 1074,
  vee: 8744,
  vfr: 120115,
  wfr: 120116,
  xfr: 120117,
  ycy: 1099,
  yen: 165,
  yfr: 120118,
  zcy: 1079,
  zfr: 120119,
  zwj: 8205,
  DD: 8517,
  GT: 62,
  Gg: 8921,
  Gt: 8811,
  Im: 8465,
  LT: 60,
  Ll: 8920,
  Lt: 8810,
  Mu: 924,
  Nu: 925,
  Or: 10836,
  Pi: 928,
  Pr: 10939,
  Re: 8476,
  Sc: 10940,
  Xi: 926,
  ac: 8766,
  af: 8289,
  ap: 8776,
  dd: 8518,
  ee: 8519,
  eg: 10906,
  el: 10905,
  gE: 8807,
  ge: 8805,
  gg: 8811,
  gl: 8823,
  gt: 62,
  ic: 8291,
  ii: 8520,
  in: 8712,
  it: 8290,
  lE: 8806,
  le: 8804,
  lg: 8822,
  ll: 8810,
  lt: 60,
  mp: 8723,
  mu: 956,
  ne: 8800,
  ni: 8715,
  nu: 957,
  oS: 9416,
  or: 8744,
  pi: 960,
  pm: 177,
  pr: 8826,
  rx: 8478,
  sc: 8827,
  wp: 8472,
  wr: 8768,
  xi: 958
};
var entity_pattern = new RegExp(`&(#?(?:x[\\w\\d]+|\\d+|${Object.keys(entities).join("|")}))(?:;|\\b)`, "g");
var disallowed_contents = new Map([
  ["li", new Set(["li"])],
  ["dt", new Set(["dt", "dd"])],
  ["dd", new Set(["dt", "dd"])],
  [
    "p",
    new Set("address article aside blockquote div dl fieldset footer form h1 h2 h3 h4 h5 h6 header hgroup hr main menu nav ol p pre section table ul".split(" "))
  ],
  ["rt", new Set(["rt", "rp"])],
  ["rp", new Set(["rt", "rp"])],
  ["optgroup", new Set(["optgroup"])],
  ["option", new Set(["option", "optgroup"])],
  ["thead", new Set(["tbody", "tfoot"])],
  ["tbody", new Set(["tbody", "tfoot"])],
  ["tfoot", new Set(["tbody"])],
  ["tr", new Set(["tr", "tbody"])],
  ["td", new Set(["td", "th", "tr"])],
  ["th", new Set(["td", "th", "tr"])]
]);
var globals = new Set([
  "alert",
  "Array",
  "Boolean",
  "clearInterval",
  "clearTimeout",
  "confirm",
  "console",
  "Date",
  "decodeURI",
  "decodeURIComponent",
  "document",
  "Element",
  "encodeURI",
  "encodeURIComponent",
  "Error",
  "EvalError",
  "Event",
  "EventSource",
  "fetch",
  "global",
  "globalThis",
  "history",
  "Infinity",
  "InternalError",
  "Intl",
  "isFinite",
  "isNaN",
  "JSON",
  "localStorage",
  "location",
  "Map",
  "Math",
  "NaN",
  "navigator",
  "Number",
  "Node",
  "Object",
  "parseFloat",
  "parseInt",
  "process",
  "Promise",
  "prompt",
  "RangeError",
  "ReferenceError",
  "RegExp",
  "sessionStorage",
  "Set",
  "setInterval",
  "setTimeout",
  "String",
  "SyntaxError",
  "TypeError",
  "undefined",
  "URIError",
  "URL",
  "window"
]);
var reserved = new Set([
  "arguments",
  "await",
  "break",
  "case",
  "catch",
  "class",
  "const",
  "continue",
  "debugger",
  "default",
  "delete",
  "do",
  "else",
  "enum",
  "eval",
  "export",
  "extends",
  "false",
  "finally",
  "for",
  "function",
  "if",
  "implements",
  "import",
  "in",
  "instanceof",
  "interface",
  "let",
  "new",
  "null",
  "package",
  "private",
  "protected",
  "public",
  "return",
  "static",
  "super",
  "switch",
  "this",
  "throw",
  "true",
  "try",
  "typeof",
  "var",
  "void",
  "while",
  "with",
  "yield"
]);
var meta_tags = new Map([
  ["svelte:head", "Head"],
  ["svelte:options", "Options"],
  ["svelte:window", "Window"],
  ["svelte:body", "Body"]
]);
var valid_meta_tags = Array.from(meta_tags.keys()).concat("svelte:self", "svelte:component");
var specials = new Map([
  [
    "script",
    {
      read: read_script,
      property: "js"
    }
  ],
  [
    "style",
    {
      read: read_style,
      property: "css"
    }
  ]
]);
var SQUARE_BRACKET_OPEN = "[".charCodeAt(0);
var SQUARE_BRACKET_CLOSE = "]".charCodeAt(0);
var CURLY_BRACKET_OPEN = "{".charCodeAt(0);
var CURLY_BRACKET_CLOSE = "}".charCodeAt(0);
function getLocator(source, options) {
  if (options === void 0) {
    options = {};
  }
  var offsetLine = options.offsetLine || 0;
  var offsetColumn = options.offsetColumn || 0;
  var originalLines = source.split("\n");
  var start = 0;
  var lineRanges = originalLines.map(function(line, i2) {
    var end = start + line.length + 1;
    var range = {start, end, line: i2};
    start = end;
    return range;
  });
  var i = 0;
  function rangeContains(range, index) {
    return range.start <= index && index < range.end;
  }
  function getLocation(range, index) {
    return {line: offsetLine + range.line, column: offsetColumn + index - range.start, character: index};
  }
  function locate(search, startIndex) {
    if (typeof search === "string") {
      search = source.indexOf(search, startIndex || 0);
    }
    var range = lineRanges[i];
    var d = search >= range.end ? 1 : -1;
    while (range) {
      if (rangeContains(range, search))
        return getLocation(range, search);
      i += d;
      range = lineRanges[i];
    }
  }
  return locate;
}
var CompileError = class extends Error {
  toString() {
    return `${this.message} (${this.start.line}:${this.start.column})
${this.frame}`;
  }
};
var TRUE = x`true`;
var FALSE = x`false`;
var svg_attributes = "accent-height accumulate additive alignment-baseline allowReorder alphabetic amplitude arabic-form ascent attributeName attributeType autoReverse azimuth baseFrequency baseline-shift baseProfile bbox begin bias by calcMode cap-height class clip clipPathUnits clip-path clip-rule color color-interpolation color-interpolation-filters color-profile color-rendering contentScriptType contentStyleType cursor cx cy d decelerate descent diffuseConstant direction display divisor dominant-baseline dur dx dy edgeMode elevation enable-background end exponent externalResourcesRequired fill fill-opacity fill-rule filter filterRes filterUnits flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight format from fr fx fy g1 g2 glyph-name glyph-orientation-horizontal glyph-orientation-vertical glyphRef gradientTransform gradientUnits hanging height href horiz-adv-x horiz-origin-x id ideographic image-rendering in in2 intercept k k1 k2 k3 k4 kernelMatrix kernelUnitLength kerning keyPoints keySplines keyTimes lang lengthAdjust letter-spacing lighting-color limitingConeAngle local marker-end marker-mid marker-start markerHeight markerUnits markerWidth mask maskContentUnits maskUnits mathematical max media method min mode name numOctaves offset onabort onactivate onbegin onclick onend onerror onfocusin onfocusout onload onmousedown onmousemove onmouseout onmouseover onmouseup onrepeat onresize onscroll onunload opacity operator order orient orientation origin overflow overline-position overline-thickness panose-1 paint-order pathLength patternContentUnits patternTransform patternUnits pointer-events points pointsAtX pointsAtY pointsAtZ preserveAlpha preserveAspectRatio primitiveUnits r radius refX refY rendering-intent repeatCount repeatDur requiredExtensions requiredFeatures restart result rotate rx ry scale seed shape-rendering slope spacing specularConstant specularExponent speed spreadMethod startOffset stdDeviation stemh stemv stitchTiles stop-color stop-opacity strikethrough-position strikethrough-thickness string stroke stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width style surfaceScale systemLanguage tabindex tableValues target targetX targetY text-anchor text-decoration text-rendering textLength to transform type u1 u2 underline-position underline-thickness unicode unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical values version vert-adv-y vert-origin-x vert-origin-y viewBox viewTarget visibility width widths word-spacing writing-mode x x-height x1 x2 xChannelSelector xlink:actuate xlink:arcrole xlink:href xlink:role xlink:show xlink:title xlink:type xml:base xml:lang xml:space y y1 y2 yChannelSelector z zoomAndPan".split(" ");
var svg_attribute_lookup = new Map();
svg_attributes.forEach((name) => {
  svg_attribute_lookup.set(name.toLowerCase(), name);
});
var attribute_lookup = {
  allowfullscreen: {property_name: "allowFullscreen", applies_to: ["iframe"]},
  allowpaymentrequest: {property_name: "allowPaymentRequest", applies_to: ["iframe"]},
  async: {applies_to: ["script"]},
  autofocus: {applies_to: ["button", "input", "keygen", "select", "textarea"]},
  autoplay: {applies_to: ["audio", "video"]},
  checked: {applies_to: ["input"]},
  controls: {applies_to: ["audio", "video"]},
  default: {applies_to: ["track"]},
  defer: {applies_to: ["script"]},
  disabled: {
    applies_to: [
      "button",
      "fieldset",
      "input",
      "keygen",
      "optgroup",
      "option",
      "select",
      "textarea"
    ]
  },
  formnovalidate: {property_name: "formNoValidate", applies_to: ["button", "input"]},
  hidden: {},
  indeterminate: {applies_to: ["input"]},
  ismap: {property_name: "isMap", applies_to: ["img"]},
  loop: {applies_to: ["audio", "bgsound", "video"]},
  multiple: {applies_to: ["input", "select"]},
  muted: {applies_to: ["audio", "video"]},
  nomodule: {property_name: "noModule", applies_to: ["script"]},
  novalidate: {property_name: "noValidate", applies_to: ["form"]},
  open: {applies_to: ["details", "dialog"]},
  playsinline: {property_name: "playsInline", applies_to: ["video"]},
  readonly: {property_name: "readOnly", applies_to: ["input", "textarea"]},
  required: {applies_to: ["input", "select", "textarea"]},
  reversed: {applies_to: ["ol"]},
  selected: {applies_to: ["option"]},
  value: {
    applies_to: [
      "button",
      "option",
      "input",
      "li",
      "meter",
      "progress",
      "param",
      "select",
      "textarea"
    ]
  }
};
Object.keys(attribute_lookup).forEach((name) => {
  const metadata = attribute_lookup[name];
  if (!metadata.property_name)
    metadata.property_name = name;
});
var boolean_attribute = new Set([
  "allowfullscreen",
  "allowpaymentrequest",
  "async",
  "autofocus",
  "autoplay",
  "checked",
  "controls",
  "default",
  "defer",
  "disabled",
  "formnovalidate",
  "hidden",
  "ismap",
  "itemscope",
  "loop",
  "multiple",
  "muted",
  "nomodule",
  "novalidate",
  "open",
  "playsinline",
  "readonly",
  "required",
  "reversed",
  "selected"
]);
var reserved_keywords = new Set(["$$props", "$$restProps", "$$slots"]);
var readonly = new Set([
  "innerWidth",
  "innerHeight",
  "outerWidth",
  "outerHeight",
  "online"
]);
var charToInteger$1 = {};
var chars$1 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
for (var i$2 = 0; i$2 < chars$1.length; i$2++) {
  charToInteger$1[chars$1.charCodeAt(i$2)] = i$2;
}
function decode$1(mappings) {
  var decoded = [];
  var line = [];
  var segment = [
    0,
    0,
    0,
    0,
    0
  ];
  var j = 0;
  for (var i = 0, shift = 0, value2 = 0; i < mappings.length; i++) {
    var c2 = mappings.charCodeAt(i);
    if (c2 === 44) {
      segmentify$1(line, segment, j);
      j = 0;
    } else if (c2 === 59) {
      segmentify$1(line, segment, j);
      j = 0;
      decoded.push(line);
      line = [];
      segment[0] = 0;
    } else {
      var integer = charToInteger$1[c2];
      if (integer === void 0) {
        throw new Error("Invalid character (" + String.fromCharCode(c2) + ")");
      }
      var hasContinuationBit = integer & 32;
      integer &= 31;
      value2 += integer << shift;
      if (hasContinuationBit) {
        shift += 5;
      } else {
        var shouldNegate = value2 & 1;
        value2 >>>= 1;
        if (shouldNegate) {
          value2 = value2 === 0 ? -2147483648 : -value2;
        }
        segment[j] += value2;
        j++;
        value2 = shift = 0;
      }
    }
  }
  segmentify$1(line, segment, j);
  decoded.push(line);
  return decoded;
}
function segmentify$1(line, segment, j) {
  if (j === 4)
    line.push([segment[0], segment[1], segment[2], segment[3]]);
  else if (j === 5)
    line.push([segment[0], segment[1], segment[2], segment[3], segment[4]]);
  else if (j === 1)
    line.push([segment[0]]);
}
function encode$1(decoded) {
  var sourceFileIndex = 0;
  var sourceCodeLine = 0;
  var sourceCodeColumn = 0;
  var nameIndex = 0;
  var mappings = "";
  for (var i = 0; i < decoded.length; i++) {
    var line = decoded[i];
    if (i > 0)
      mappings += ";";
    if (line.length === 0)
      continue;
    var generatedCodeColumn = 0;
    var lineMappings = [];
    for (var _i = 0, line_1 = line; _i < line_1.length; _i++) {
      var segment = line_1[_i];
      var segmentMappings = encodeInteger$1(segment[0] - generatedCodeColumn);
      generatedCodeColumn = segment[0];
      if (segment.length > 1) {
        segmentMappings += encodeInteger$1(segment[1] - sourceFileIndex) + encodeInteger$1(segment[2] - sourceCodeLine) + encodeInteger$1(segment[3] - sourceCodeColumn);
        sourceFileIndex = segment[1];
        sourceCodeLine = segment[2];
        sourceCodeColumn = segment[3];
      }
      if (segment.length === 5) {
        segmentMappings += encodeInteger$1(segment[4] - nameIndex);
        nameIndex = segment[4];
      }
      lineMappings.push(segmentMappings);
    }
    mappings += lineMappings.join(",");
  }
  return mappings;
}
function encodeInteger$1(num) {
  var result = "";
  num = num < 0 ? -num << 1 | 1 : num << 1;
  do {
    var clamped = num & 31;
    num >>>= 5;
    if (num > 0) {
      clamped |= 32;
    }
    result += chars$1[clamped];
  } while (num > 0);
  return result;
}
function defaults(target, source) {
  return Object.assign(Object.create(null), source, target);
}
function decodeSourceMap(map) {
  if (typeof map === "string") {
    map = JSON.parse(map);
  }
  let {mappings} = map;
  if (typeof mappings === "string") {
    mappings = decode$1(mappings);
  } else {
    mappings = mappings.map(cloneSegmentLine);
  }
  mappings.forEach(sortSegments);
  return defaults({mappings}, map);
}
function cloneSegmentLine(segments) {
  return segments.slice();
}
function sortSegments(segments) {
  segments.sort(segmentComparator);
}
function segmentComparator(a, b) {
  return a[0] - b[0];
}
var OriginalSource = class {
  constructor(filename, content) {
    this.filename = filename;
    this.content = content;
  }
  traceSegment(line, column, name) {
    return {column, line, name, source: this};
  }
};
var Url$1 = typeof URL !== "undefined" ? URL : require("url").URL;
var parentRegex = /(^|\/)\.\.(?=\/|$)/g;
function isAbsoluteUrl(url) {
  try {
    return !!new Url$1(url);
  } catch (e) {
    return false;
  }
}
function uniqInStr(str) {
  let uniq = String(Math.random()).slice(2);
  while (str.indexOf(uniq) > -1) {
    uniq += uniq;
  }
  return uniq;
}
function stripPathFilename(path3) {
  path3 = normalizePath(path3);
  const index = path3.lastIndexOf("/");
  return path3.slice(0, index + 1);
}
function normalizeProtocolRelative(input, absoluteBase) {
  const {href, protocol} = new Url$1(input, absoluteBase);
  return href.slice(protocol.length);
}
function normalizeSimplePath(input) {
  const {href} = new Url$1(input, "https://foo.com/");
  return href.slice("https://foo.com/".length);
}
function normalizePath(input) {
  if (!parentRegex.test(input))
    return normalizeSimplePath(input);
  let total = 1;
  while (parentRegex.test(input))
    total++;
  const uniqDirectory = `z${uniqInStr(input)}/`;
  const search = new RegExp(`^(?:${uniqDirectory})*`);
  const relative = normalizeSimplePath(uniqDirectory.repeat(total) + input);
  return relative.replace(search, (all) => {
    const leftover = all.length / uniqDirectory.length;
    return "../".repeat(total - leftover);
  });
}
function resolve(input, base) {
  if (!base)
    base = "";
  if (isAbsoluteUrl(input))
    return new Url$1(input).href;
  if (base) {
    if (isAbsoluteUrl(base))
      return new Url$1(input, base).href;
    if (base.startsWith("//"))
      return normalizeProtocolRelative(input, `https:${base}`);
  }
  if (input.startsWith("//"))
    return normalizeProtocolRelative(input, "https://foo.com/");
  if (input.startsWith("/"))
    return "/" + normalizeSimplePath(input);
  const joined = stripPathFilename(base) + input;
  if (base.startsWith("/"))
    return "/" + normalizeSimplePath(joined);
  const relative = normalizePath(joined);
  if ((base || input).startsWith(".") && !relative.startsWith(".")) {
    return "./" + relative;
  }
  return relative;
}
function resolve$1(input, base) {
  if (base && !base.endsWith("/"))
    base += "/";
  return resolve(input, base);
}
function binarySearch(haystack, needle, comparator) {
  let low = 0;
  let high = haystack.length - 1;
  while (low <= high) {
    const mid = low + (high - low >> 1);
    const cmp = comparator(haystack[mid], needle);
    if (cmp === 0) {
      return mid;
    }
    if (cmp < 0) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return ~low;
}
var FastStringArray = class {
  constructor() {
    this.indexes = Object.create(null);
    this.array = [];
  }
  put(key) {
    const {array, indexes} = this;
    let index = indexes[key];
    if (index === void 0) {
      index = indexes[key] = array.length;
      array.push(key);
    }
    return index;
  }
};
var SourceMapTree = class {
  constructor(map, sources) {
    this.map = map;
    this.sources = sources;
  }
  traceMappings() {
    const mappings = [];
    const names = new FastStringArray();
    const sources = new FastStringArray();
    const sourcesContent = [];
    const {mappings: rootMappings, names: rootNames} = this.map;
    for (let i = 0; i < rootMappings.length; i++) {
      const segments = rootMappings[i];
      const tracedSegments = [];
      for (let j = 0; j < segments.length; j++) {
        const segment = segments[j];
        if (segment.length === 1)
          continue;
        const source = this.sources[segment[1]];
        const traced = source.traceSegment(segment[2], segment[3], segment.length === 5 ? rootNames[segment[4]] : "");
        if (!traced)
          continue;
        const {column, line, name} = traced;
        const {content, filename} = traced.source;
        const sourceIndex = sources.put(filename);
        sourcesContent[sourceIndex] = content;
        if (name) {
          tracedSegments.push([segment[0], sourceIndex, line, column, names.put(name)]);
        } else {
          tracedSegments.push([segment[0], sourceIndex, line, column]);
        }
      }
      mappings.push(tracedSegments);
    }
    return defaults({
      mappings,
      names: names.array,
      sources: sources.array,
      sourcesContent
    }, this.map);
  }
  traceSegment(line, column, name) {
    const {mappings, names} = this.map;
    if (line >= mappings.length)
      return null;
    const segments = mappings[line];
    if (segments.length === 0)
      return null;
    let index = binarySearch(segments, column, segmentComparator$1);
    if (index === -1)
      return null;
    if (index < 0) {
      index = ~index - 1;
    }
    const segment = segments[index];
    if (segment.length === 1)
      return null;
    const source = this.sources[segment[1]];
    return source.traceSegment(segment[2], segment[3], segment.length === 5 ? names[segment[4]] : name);
  }
};
function segmentComparator$1(segment, column) {
  return segment[0] - column;
}
function stripFilename(path3) {
  if (!path3)
    return "";
  const index = path3.lastIndexOf("/");
  return path3.slice(0, index + 1);
}
function asArray(value2) {
  if (Array.isArray(value2))
    return value2;
  return [value2];
}
function buildSourceMapTree(input, loader, relativeRoot) {
  const maps = asArray(input).map(decodeSourceMap);
  const map = maps.pop();
  for (let i = 0; i < maps.length; i++) {
    if (maps[i].sources.length !== 1) {
      throw new Error(`Transformation map ${i} must have exactly one source file.
Did you specify these with the most recent transformation maps first?`);
    }
  }
  const {sourceRoot, sources, sourcesContent} = map;
  const children = sources.map((sourceFile, i) => {
    const uri = resolve$1(sourceFile || "", resolve$1(sourceRoot || "", stripFilename(relativeRoot)));
    const sourceMap = loader(uri);
    if (!sourceMap) {
      const sourceContent = sourcesContent ? sourcesContent[i] : null;
      return new OriginalSource(uri, sourceContent);
    }
    return buildSourceMapTree(decodeSourceMap(sourceMap), loader, uri);
  });
  let tree = new SourceMapTree(map, children);
  for (let i = maps.length - 1; i >= 0; i--) {
    tree = new SourceMapTree(maps[i], [tree]);
  }
  return tree;
}
var SourceMap = class {
  constructor(map, excludeContent) {
    this.version = 3;
    if ("file" in map)
      this.file = map.file;
    this.mappings = encode$1(map.mappings);
    this.names = map.names;
    this.sources = map.sources;
    if (!excludeContent && "sourcesContent" in map)
      this.sourcesContent = map.sourcesContent;
  }
  toString() {
    return JSON.stringify(this);
  }
};
function remapping(input, loader, excludeContent) {
  const graph = buildSourceMapTree(input, loader);
  return new SourceMap(graph.traceMappings(), !!excludeContent);
}
function last_line_length(s) {
  return s.length - s.lastIndexOf("\n") - 1;
}
function sourcemap_add_offset(map, offset2) {
  if (map.mappings.length == 0)
    return map;
  const segment_list = map.mappings[0];
  for (let segment = 0; segment < segment_list.length; segment++) {
    const seg = segment_list[segment];
    if (seg[3])
      seg[3] += offset2.column;
  }
  for (let line = 0; line < map.mappings.length; line++) {
    const segment_list2 = map.mappings[line];
    for (let segment = 0; segment < segment_list2.length; segment++) {
      const seg = segment_list2[segment];
      if (seg[2])
        seg[2] += offset2.line;
    }
  }
}
function merge_tables(this_table, other_table) {
  const new_table = this_table.slice();
  const idx_map = [];
  other_table = other_table || [];
  let val_changed = false;
  for (const [other_idx, other_val] of other_table.entries()) {
    const this_idx = this_table.indexOf(other_val);
    if (this_idx >= 0) {
      idx_map[other_idx] = this_idx;
    } else {
      const new_idx = new_table.length;
      new_table[new_idx] = other_val;
      idx_map[other_idx] = new_idx;
      val_changed = true;
    }
  }
  let idx_changed = val_changed;
  if (val_changed) {
    if (idx_map.find((val, idx) => val != idx) === void 0) {
      idx_changed = false;
    }
  }
  return [new_table, idx_map, val_changed, idx_changed];
}
function pushArray(_this, other) {
  for (let i = 0; i < other.length; i++) {
    _this.push(other[i]);
  }
}
var StringWithSourcemap = class {
  constructor(string = "", map = null) {
    this.string = string;
    if (map) {
      this.map = map;
    } else {
      this.map = {
        version: 3,
        mappings: [],
        sources: [],
        names: []
      };
    }
  }
  concat(other) {
    if (other.string == "")
      return this;
    if (this.string == "") {
      this.string = other.string;
      this.map = other.map;
      return this;
    }
    this.string += other.string;
    const m1 = this.map;
    const m2 = other.map;
    if (m2.mappings.length == 0)
      return this;
    const [sources, new_source_idx, sources_changed, sources_idx_changed] = merge_tables(m1.sources, m2.sources);
    const [names, new_name_idx, names_changed, names_idx_changed] = merge_tables(m1.names, m2.names);
    if (sources_changed)
      m1.sources = sources;
    if (names_changed)
      m1.names = names;
    if (sources_idx_changed && names_idx_changed) {
      for (let line = 0; line < m2.mappings.length; line++) {
        const segment_list = m2.mappings[line];
        for (let segment = 0; segment < segment_list.length; segment++) {
          const seg = segment_list[segment];
          if (seg[1])
            seg[1] = new_source_idx[seg[1]];
          if (seg[4])
            seg[4] = new_name_idx[seg[4]];
        }
      }
    } else if (sources_idx_changed) {
      for (let line = 0; line < m2.mappings.length; line++) {
        const segment_list = m2.mappings[line];
        for (let segment = 0; segment < segment_list.length; segment++) {
          const seg = segment_list[segment];
          if (seg[1])
            seg[1] = new_source_idx[seg[1]];
        }
      }
    } else if (names_idx_changed) {
      for (let line = 0; line < m2.mappings.length; line++) {
        const segment_list = m2.mappings[line];
        for (let segment = 0; segment < segment_list.length; segment++) {
          const seg = segment_list[segment];
          if (seg[4])
            seg[4] = new_name_idx[seg[4]];
        }
      }
    }
    const column_offset = last_line_length(this.string);
    if (m2.mappings.length > 0 && column_offset > 0) {
      const first_line = m2.mappings[0];
      for (let i = 0; i < first_line.length; i++) {
        first_line[i][0] += column_offset;
      }
    }
    pushArray(m1.mappings[m1.mappings.length - 1], m2.mappings.shift());
    pushArray(m1.mappings, m2.mappings);
    return this;
  }
  static from_processed(string, map) {
    if (map)
      return new StringWithSourcemap(string, map);
    if (string == "")
      return new StringWithSourcemap();
    map = {version: 3, names: [], sources: [], mappings: []};
    const line_count = (string.match(/\n/g) || "").length;
    for (let i = 0; i < line_count; i++)
      map.mappings.push([]);
    return new StringWithSourcemap(string, map);
  }
  static from_source(source_file, source, offset2) {
    if (!offset2)
      offset2 = {line: 0, column: 0};
    const map = {version: 3, names: [], sources: [source_file], mappings: []};
    if (source == "")
      return new StringWithSourcemap(source, map);
    const line_list = source.split("\n");
    for (let line = 0; line < line_list.length; line++) {
      map.mappings.push([]);
      const token_list = line_list[line].split(/([^\d\w\s]|\s+)/g);
      for (let token = 0, column = 0; token < token_list.length; token++) {
        if (token_list[token] == "")
          continue;
        map.mappings[line].push([column, 0, offset2.line + line, column]);
        column += token_list[token].length;
      }
    }
    const segment_list = map.mappings[0];
    for (let segment = 0; segment < segment_list.length; segment++) {
      segment_list[segment][3] += offset2.column;
    }
    return new StringWithSourcemap(source, map);
  }
};
function combine_sourcemaps(filename, sourcemap_list) {
  if (sourcemap_list.length == 0)
    return null;
  let map_idx = 1;
  const map = sourcemap_list.slice(0, -1).find((m) => m.sources.length !== 1) === void 0 ? remapping(sourcemap_list, () => null, true) : remapping(sourcemap_list[0], function loader(sourcefile) {
    if (sourcefile === filename && sourcemap_list[map_idx]) {
      return sourcemap_list[map_idx++];
    } else {
      return null;
    }
  }, true);
  if (!map.file)
    delete map.file;
  return map;
}
var b64enc = typeof btoa == "function" ? btoa : (b) => Buffer.from(b).toString("base64");
var boolean_attributes = new Set([
  "allowfullscreen",
  "allowpaymentrequest",
  "async",
  "autofocus",
  "autoplay",
  "checked",
  "controls",
  "default",
  "defer",
  "disabled",
  "formnovalidate",
  "hidden",
  "ismap",
  "loop",
  "multiple",
  "muted",
  "nomodule",
  "novalidate",
  "open",
  "playsinline",
  "readonly",
  "required",
  "reversed",
  "selected"
]);
var Chunk = function Chunk2(start, end, content) {
  this.start = start;
  this.end = end;
  this.original = content;
  this.intro = "";
  this.outro = "";
  this.content = content;
  this.storeName = false;
  this.edited = false;
  Object.defineProperties(this, {
    previous: {writable: true, value: null},
    next: {writable: true, value: null}
  });
};
Chunk.prototype.appendLeft = function appendLeft(content) {
  this.outro += content;
};
Chunk.prototype.appendRight = function appendRight(content) {
  this.intro = this.intro + content;
};
Chunk.prototype.clone = function clone() {
  var chunk = new Chunk(this.start, this.end, this.original);
  chunk.intro = this.intro;
  chunk.outro = this.outro;
  chunk.content = this.content;
  chunk.storeName = this.storeName;
  chunk.edited = this.edited;
  return chunk;
};
Chunk.prototype.contains = function contains(index) {
  return this.start < index && index < this.end;
};
Chunk.prototype.eachNext = function eachNext(fn) {
  var chunk = this;
  while (chunk) {
    fn(chunk);
    chunk = chunk.next;
  }
};
Chunk.prototype.eachPrevious = function eachPrevious(fn) {
  var chunk = this;
  while (chunk) {
    fn(chunk);
    chunk = chunk.previous;
  }
};
Chunk.prototype.edit = function edit(content, storeName, contentOnly) {
  this.content = content;
  if (!contentOnly) {
    this.intro = "";
    this.outro = "";
  }
  this.storeName = storeName;
  this.edited = true;
  return this;
};
Chunk.prototype.prependLeft = function prependLeft(content) {
  this.outro = content + this.outro;
};
Chunk.prototype.prependRight = function prependRight(content) {
  this.intro = content + this.intro;
};
Chunk.prototype.split = function split(index) {
  var sliceIndex = index - this.start;
  var originalBefore = this.original.slice(0, sliceIndex);
  var originalAfter = this.original.slice(sliceIndex);
  this.original = originalBefore;
  var newChunk = new Chunk(index, this.end, originalAfter);
  newChunk.outro = this.outro;
  this.outro = "";
  this.end = index;
  if (this.edited) {
    newChunk.edit("", false);
    this.content = "";
  } else {
    this.content = originalBefore;
  }
  newChunk.next = this.next;
  if (newChunk.next) {
    newChunk.next.previous = newChunk;
  }
  newChunk.previous = this;
  this.next = newChunk;
  return newChunk;
};
Chunk.prototype.toString = function toString2() {
  return this.intro + this.content + this.outro;
};
Chunk.prototype.trimEnd = function trimEnd(rx) {
  this.outro = this.outro.replace(rx, "");
  if (this.outro.length) {
    return true;
  }
  var trimmed = this.content.replace(rx, "");
  if (trimmed.length) {
    if (trimmed !== this.content) {
      this.split(this.start + trimmed.length).edit("", void 0, true);
    }
    return true;
  } else {
    this.edit("", void 0, true);
    this.intro = this.intro.replace(rx, "");
    if (this.intro.length) {
      return true;
    }
  }
};
Chunk.prototype.trimStart = function trimStart(rx) {
  this.intro = this.intro.replace(rx, "");
  if (this.intro.length) {
    return true;
  }
  var trimmed = this.content.replace(rx, "");
  if (trimmed.length) {
    if (trimmed !== this.content) {
      this.split(this.end - trimmed.length);
      this.edit("", void 0, true);
    }
    return true;
  } else {
    this.edit("", void 0, true);
    this.outro = this.outro.replace(rx, "");
    if (this.outro.length) {
      return true;
    }
  }
};
var btoa$2 = function() {
  throw new Error("Unsupported environment: `window.btoa` or `Buffer` should be supported.");
};
if (typeof window !== "undefined" && typeof window.btoa === "function") {
  btoa$2 = function(str) {
    return window.btoa(unescape(encodeURIComponent(str)));
  };
} else if (typeof Buffer === "function") {
  btoa$2 = function(str) {
    return Buffer.from(str, "utf-8").toString("base64");
  };
}
var SourceMap$1 = function SourceMap2(properties) {
  this.version = 3;
  this.file = properties.file;
  this.sources = properties.sources;
  this.sourcesContent = properties.sourcesContent;
  this.names = properties.names;
  this.mappings = encode(properties.mappings);
};
SourceMap$1.prototype.toString = function toString3() {
  return JSON.stringify(this);
};
SourceMap$1.prototype.toUrl = function toUrl() {
  return "data:application/json;charset=utf-8;base64," + btoa$2(this.toString());
};
function guessIndent(code) {
  var lines = code.split("\n");
  var tabbed = lines.filter(function(line) {
    return /^\t+/.test(line);
  });
  var spaced = lines.filter(function(line) {
    return /^ {2,}/.test(line);
  });
  if (tabbed.length === 0 && spaced.length === 0) {
    return null;
  }
  if (tabbed.length >= spaced.length) {
    return "	";
  }
  var min = spaced.reduce(function(previous, current2) {
    var numSpaces = /^ +/.exec(current2)[0].length;
    return Math.min(numSpaces, previous);
  }, Infinity);
  return new Array(min + 1).join(" ");
}
function getRelativePath(from, to) {
  var fromParts = from.split(/[/\\]/);
  var toParts = to.split(/[/\\]/);
  fromParts.pop();
  while (fromParts[0] === toParts[0]) {
    fromParts.shift();
    toParts.shift();
  }
  if (fromParts.length) {
    var i = fromParts.length;
    while (i--) {
      fromParts[i] = "..";
    }
  }
  return fromParts.concat(toParts).join("/");
}
var toString$1 = Object.prototype.toString;
function isObject(thing) {
  return toString$1.call(thing) === "[object Object]";
}
function getLocator$1(source) {
  var originalLines = source.split("\n");
  var lineOffsets = [];
  for (var i = 0, pos = 0; i < originalLines.length; i++) {
    lineOffsets.push(pos);
    pos += originalLines[i].length + 1;
  }
  return function locate(index) {
    var i2 = 0;
    var j = lineOffsets.length;
    while (i2 < j) {
      var m = i2 + j >> 1;
      if (index < lineOffsets[m]) {
        j = m;
      } else {
        i2 = m + 1;
      }
    }
    var line = i2 - 1;
    var column = index - lineOffsets[line];
    return {line, column};
  };
}
var Mappings = function Mappings2(hires) {
  this.hires = hires;
  this.generatedCodeLine = 0;
  this.generatedCodeColumn = 0;
  this.raw = [];
  this.rawSegments = this.raw[this.generatedCodeLine] = [];
  this.pending = null;
};
Mappings.prototype.addEdit = function addEdit(sourceIndex, content, loc, nameIndex) {
  if (content.length) {
    var segment = [this.generatedCodeColumn, sourceIndex, loc.line, loc.column];
    if (nameIndex >= 0) {
      segment.push(nameIndex);
    }
    this.rawSegments.push(segment);
  } else if (this.pending) {
    this.rawSegments.push(this.pending);
  }
  this.advance(content);
  this.pending = null;
};
Mappings.prototype.addUneditedChunk = function addUneditedChunk(sourceIndex, chunk, original, loc, sourcemapLocations) {
  var originalCharIndex = chunk.start;
  var first = true;
  while (originalCharIndex < chunk.end) {
    if (this.hires || first || sourcemapLocations[originalCharIndex]) {
      this.rawSegments.push([this.generatedCodeColumn, sourceIndex, loc.line, loc.column]);
    }
    if (original[originalCharIndex] === "\n") {
      loc.line += 1;
      loc.column = 0;
      this.generatedCodeLine += 1;
      this.raw[this.generatedCodeLine] = this.rawSegments = [];
      this.generatedCodeColumn = 0;
    } else {
      loc.column += 1;
      this.generatedCodeColumn += 1;
    }
    originalCharIndex += 1;
    first = false;
  }
  this.pending = [this.generatedCodeColumn, sourceIndex, loc.line, loc.column];
};
Mappings.prototype.advance = function advance2(str) {
  if (!str) {
    return;
  }
  var lines = str.split("\n");
  if (lines.length > 1) {
    for (var i = 0; i < lines.length - 1; i++) {
      this.generatedCodeLine++;
      this.raw[this.generatedCodeLine] = this.rawSegments = [];
    }
    this.generatedCodeColumn = 0;
  }
  this.generatedCodeColumn += lines[lines.length - 1].length;
};
var n = "\n";
var warned = {
  insertLeft: false,
  insertRight: false,
  storeName: false
};
var MagicString = function MagicString2(string, options) {
  if (options === void 0)
    options = {};
  var chunk = new Chunk(0, string.length, string);
  Object.defineProperties(this, {
    original: {writable: true, value: string},
    outro: {writable: true, value: ""},
    intro: {writable: true, value: ""},
    firstChunk: {writable: true, value: chunk},
    lastChunk: {writable: true, value: chunk},
    lastSearchedChunk: {writable: true, value: chunk},
    byStart: {writable: true, value: {}},
    byEnd: {writable: true, value: {}},
    filename: {writable: true, value: options.filename},
    indentExclusionRanges: {writable: true, value: options.indentExclusionRanges},
    sourcemapLocations: {writable: true, value: {}},
    storedNames: {writable: true, value: {}},
    indentStr: {writable: true, value: guessIndent(string)}
  });
  this.byStart[0] = chunk;
  this.byEnd[string.length] = chunk;
};
MagicString.prototype.addSourcemapLocation = function addSourcemapLocation(char) {
  this.sourcemapLocations[char] = true;
};
MagicString.prototype.append = function append(content) {
  if (typeof content !== "string") {
    throw new TypeError("outro content must be a string");
  }
  this.outro += content;
  return this;
};
MagicString.prototype.appendLeft = function appendLeft2(index, content) {
  if (typeof content !== "string") {
    throw new TypeError("inserted content must be a string");
  }
  this._split(index);
  var chunk = this.byEnd[index];
  if (chunk) {
    chunk.appendLeft(content);
  } else {
    this.intro += content;
  }
  return this;
};
MagicString.prototype.appendRight = function appendRight2(index, content) {
  if (typeof content !== "string") {
    throw new TypeError("inserted content must be a string");
  }
  this._split(index);
  var chunk = this.byStart[index];
  if (chunk) {
    chunk.appendRight(content);
  } else {
    this.outro += content;
  }
  return this;
};
MagicString.prototype.clone = function clone2() {
  var cloned = new MagicString(this.original, {filename: this.filename});
  var originalChunk = this.firstChunk;
  var clonedChunk = cloned.firstChunk = cloned.lastSearchedChunk = originalChunk.clone();
  while (originalChunk) {
    cloned.byStart[clonedChunk.start] = clonedChunk;
    cloned.byEnd[clonedChunk.end] = clonedChunk;
    var nextOriginalChunk = originalChunk.next;
    var nextClonedChunk = nextOriginalChunk && nextOriginalChunk.clone();
    if (nextClonedChunk) {
      clonedChunk.next = nextClonedChunk;
      nextClonedChunk.previous = clonedChunk;
      clonedChunk = nextClonedChunk;
    }
    originalChunk = nextOriginalChunk;
  }
  cloned.lastChunk = clonedChunk;
  if (this.indentExclusionRanges) {
    cloned.indentExclusionRanges = this.indentExclusionRanges.slice();
  }
  Object.keys(this.sourcemapLocations).forEach(function(loc) {
    cloned.sourcemapLocations[loc] = true;
  });
  return cloned;
};
MagicString.prototype.generateDecodedMap = function generateDecodedMap(options) {
  var this$1 = this;
  options = options || {};
  var sourceIndex = 0;
  var names = Object.keys(this.storedNames);
  var mappings = new Mappings(options.hires);
  var locate = getLocator$1(this.original);
  if (this.intro) {
    mappings.advance(this.intro);
  }
  this.firstChunk.eachNext(function(chunk) {
    var loc = locate(chunk.start);
    if (chunk.intro.length) {
      mappings.advance(chunk.intro);
    }
    if (chunk.edited) {
      mappings.addEdit(sourceIndex, chunk.content, loc, chunk.storeName ? names.indexOf(chunk.original) : -1);
    } else {
      mappings.addUneditedChunk(sourceIndex, chunk, this$1.original, loc, this$1.sourcemapLocations);
    }
    if (chunk.outro.length) {
      mappings.advance(chunk.outro);
    }
  });
  return {
    file: options.file ? options.file.split(/[/\\]/).pop() : null,
    sources: [options.source ? getRelativePath(options.file || "", options.source) : null],
    sourcesContent: options.includeContent ? [this.original] : [null],
    names,
    mappings: mappings.raw
  };
};
MagicString.prototype.generateMap = function generateMap(options) {
  return new SourceMap$1(this.generateDecodedMap(options));
};
MagicString.prototype.getIndentString = function getIndentString() {
  return this.indentStr === null ? "	" : this.indentStr;
};
MagicString.prototype.indent = function indent(indentStr, options) {
  var pattern = /^[^\r\n]/gm;
  if (isObject(indentStr)) {
    options = indentStr;
    indentStr = void 0;
  }
  indentStr = indentStr !== void 0 ? indentStr : this.indentStr || "	";
  if (indentStr === "") {
    return this;
  }
  options = options || {};
  var isExcluded = {};
  if (options.exclude) {
    var exclusions = typeof options.exclude[0] === "number" ? [options.exclude] : options.exclude;
    exclusions.forEach(function(exclusion) {
      for (var i = exclusion[0]; i < exclusion[1]; i += 1) {
        isExcluded[i] = true;
      }
    });
  }
  var shouldIndentNextCharacter = options.indentStart !== false;
  var replacer = function(match) {
    if (shouldIndentNextCharacter) {
      return "" + indentStr + match;
    }
    shouldIndentNextCharacter = true;
    return match;
  };
  this.intro = this.intro.replace(pattern, replacer);
  var charIndex = 0;
  var chunk = this.firstChunk;
  while (chunk) {
    var end = chunk.end;
    if (chunk.edited) {
      if (!isExcluded[charIndex]) {
        chunk.content = chunk.content.replace(pattern, replacer);
        if (chunk.content.length) {
          shouldIndentNextCharacter = chunk.content[chunk.content.length - 1] === "\n";
        }
      }
    } else {
      charIndex = chunk.start;
      while (charIndex < end) {
        if (!isExcluded[charIndex]) {
          var char = this.original[charIndex];
          if (char === "\n") {
            shouldIndentNextCharacter = true;
          } else if (char !== "\r" && shouldIndentNextCharacter) {
            shouldIndentNextCharacter = false;
            if (charIndex === chunk.start) {
              chunk.prependRight(indentStr);
            } else {
              this._splitChunk(chunk, charIndex);
              chunk = chunk.next;
              chunk.prependRight(indentStr);
            }
          }
        }
        charIndex += 1;
      }
    }
    charIndex = chunk.end;
    chunk = chunk.next;
  }
  this.outro = this.outro.replace(pattern, replacer);
  return this;
};
MagicString.prototype.insert = function insert() {
  throw new Error("magicString.insert(...) is deprecated. Use prependRight(...) or appendLeft(...)");
};
MagicString.prototype.insertLeft = function insertLeft(index, content) {
  if (!warned.insertLeft) {
    console.warn("magicString.insertLeft(...) is deprecated. Use magicString.appendLeft(...) instead");
    warned.insertLeft = true;
  }
  return this.appendLeft(index, content);
};
MagicString.prototype.insertRight = function insertRight(index, content) {
  if (!warned.insertRight) {
    console.warn("magicString.insertRight(...) is deprecated. Use magicString.prependRight(...) instead");
    warned.insertRight = true;
  }
  return this.prependRight(index, content);
};
MagicString.prototype.move = function move(start, end, index) {
  if (index >= start && index <= end) {
    throw new Error("Cannot move a selection inside itself");
  }
  this._split(start);
  this._split(end);
  this._split(index);
  var first = this.byStart[start];
  var last = this.byEnd[end];
  var oldLeft = first.previous;
  var oldRight = last.next;
  var newRight = this.byStart[index];
  if (!newRight && last === this.lastChunk) {
    return this;
  }
  var newLeft = newRight ? newRight.previous : this.lastChunk;
  if (oldLeft) {
    oldLeft.next = oldRight;
  }
  if (oldRight) {
    oldRight.previous = oldLeft;
  }
  if (newLeft) {
    newLeft.next = first;
  }
  if (newRight) {
    newRight.previous = last;
  }
  if (!first.previous) {
    this.firstChunk = last.next;
  }
  if (!last.next) {
    this.lastChunk = first.previous;
    this.lastChunk.next = null;
  }
  first.previous = newLeft;
  last.next = newRight || null;
  if (!newLeft) {
    this.firstChunk = first;
  }
  if (!newRight) {
    this.lastChunk = last;
  }
  return this;
};
MagicString.prototype.overwrite = function overwrite(start, end, content, options) {
  if (typeof content !== "string") {
    throw new TypeError("replacement content must be a string");
  }
  while (start < 0) {
    start += this.original.length;
  }
  while (end < 0) {
    end += this.original.length;
  }
  if (end > this.original.length) {
    throw new Error("end is out of bounds");
  }
  if (start === end) {
    throw new Error("Cannot overwrite a zero-length range \u2013 use appendLeft or prependRight instead");
  }
  this._split(start);
  this._split(end);
  if (options === true) {
    if (!warned.storeName) {
      console.warn("The final argument to magicString.overwrite(...) should be an options object. See https://github.com/rich-harris/magic-string");
      warned.storeName = true;
    }
    options = {storeName: true};
  }
  var storeName = options !== void 0 ? options.storeName : false;
  var contentOnly = options !== void 0 ? options.contentOnly : false;
  if (storeName) {
    var original = this.original.slice(start, end);
    this.storedNames[original] = true;
  }
  var first = this.byStart[start];
  var last = this.byEnd[end];
  if (first) {
    if (end > first.end && first.next !== this.byStart[first.end]) {
      throw new Error("Cannot overwrite across a split point");
    }
    first.edit(content, storeName, contentOnly);
    if (first !== last) {
      var chunk = first.next;
      while (chunk !== last) {
        chunk.edit("", false);
        chunk = chunk.next;
      }
      chunk.edit("", false);
    }
  } else {
    var newChunk = new Chunk(start, end, "").edit(content, storeName);
    last.next = newChunk;
    newChunk.previous = last;
  }
  return this;
};
MagicString.prototype.prepend = function prepend(content) {
  if (typeof content !== "string") {
    throw new TypeError("outro content must be a string");
  }
  this.intro = content + this.intro;
  return this;
};
MagicString.prototype.prependLeft = function prependLeft2(index, content) {
  if (typeof content !== "string") {
    throw new TypeError("inserted content must be a string");
  }
  this._split(index);
  var chunk = this.byEnd[index];
  if (chunk) {
    chunk.prependLeft(content);
  } else {
    this.intro = content + this.intro;
  }
  return this;
};
MagicString.prototype.prependRight = function prependRight2(index, content) {
  if (typeof content !== "string") {
    throw new TypeError("inserted content must be a string");
  }
  this._split(index);
  var chunk = this.byStart[index];
  if (chunk) {
    chunk.prependRight(content);
  } else {
    this.outro = content + this.outro;
  }
  return this;
};
MagicString.prototype.remove = function remove2(start, end) {
  while (start < 0) {
    start += this.original.length;
  }
  while (end < 0) {
    end += this.original.length;
  }
  if (start === end) {
    return this;
  }
  if (start < 0 || end > this.original.length) {
    throw new Error("Character is out of bounds");
  }
  if (start > end) {
    throw new Error("end must be greater than start");
  }
  this._split(start);
  this._split(end);
  var chunk = this.byStart[start];
  while (chunk) {
    chunk.intro = "";
    chunk.outro = "";
    chunk.edit("");
    chunk = end > chunk.end ? this.byStart[chunk.end] : null;
  }
  return this;
};
MagicString.prototype.lastChar = function lastChar() {
  if (this.outro.length) {
    return this.outro[this.outro.length - 1];
  }
  var chunk = this.lastChunk;
  do {
    if (chunk.outro.length) {
      return chunk.outro[chunk.outro.length - 1];
    }
    if (chunk.content.length) {
      return chunk.content[chunk.content.length - 1];
    }
    if (chunk.intro.length) {
      return chunk.intro[chunk.intro.length - 1];
    }
  } while (chunk = chunk.previous);
  if (this.intro.length) {
    return this.intro[this.intro.length - 1];
  }
  return "";
};
MagicString.prototype.lastLine = function lastLine() {
  var lineIndex = this.outro.lastIndexOf(n);
  if (lineIndex !== -1) {
    return this.outro.substr(lineIndex + 1);
  }
  var lineStr = this.outro;
  var chunk = this.lastChunk;
  do {
    if (chunk.outro.length > 0) {
      lineIndex = chunk.outro.lastIndexOf(n);
      if (lineIndex !== -1) {
        return chunk.outro.substr(lineIndex + 1) + lineStr;
      }
      lineStr = chunk.outro + lineStr;
    }
    if (chunk.content.length > 0) {
      lineIndex = chunk.content.lastIndexOf(n);
      if (lineIndex !== -1) {
        return chunk.content.substr(lineIndex + 1) + lineStr;
      }
      lineStr = chunk.content + lineStr;
    }
    if (chunk.intro.length > 0) {
      lineIndex = chunk.intro.lastIndexOf(n);
      if (lineIndex !== -1) {
        return chunk.intro.substr(lineIndex + 1) + lineStr;
      }
      lineStr = chunk.intro + lineStr;
    }
  } while (chunk = chunk.previous);
  lineIndex = this.intro.lastIndexOf(n);
  if (lineIndex !== -1) {
    return this.intro.substr(lineIndex + 1) + lineStr;
  }
  return this.intro + lineStr;
};
MagicString.prototype.slice = function slice(start, end) {
  if (start === void 0)
    start = 0;
  if (end === void 0)
    end = this.original.length;
  while (start < 0) {
    start += this.original.length;
  }
  while (end < 0) {
    end += this.original.length;
  }
  var result = "";
  var chunk = this.firstChunk;
  while (chunk && (chunk.start > start || chunk.end <= start)) {
    if (chunk.start < end && chunk.end >= end) {
      return result;
    }
    chunk = chunk.next;
  }
  if (chunk && chunk.edited && chunk.start !== start) {
    throw new Error("Cannot use replaced character " + start + " as slice start anchor.");
  }
  var startChunk = chunk;
  while (chunk) {
    if (chunk.intro && (startChunk !== chunk || chunk.start === start)) {
      result += chunk.intro;
    }
    var containsEnd = chunk.start < end && chunk.end >= end;
    if (containsEnd && chunk.edited && chunk.end !== end) {
      throw new Error("Cannot use replaced character " + end + " as slice end anchor.");
    }
    var sliceStart = startChunk === chunk ? start - chunk.start : 0;
    var sliceEnd = containsEnd ? chunk.content.length + end - chunk.end : chunk.content.length;
    result += chunk.content.slice(sliceStart, sliceEnd);
    if (chunk.outro && (!containsEnd || chunk.end === end)) {
      result += chunk.outro;
    }
    if (containsEnd) {
      break;
    }
    chunk = chunk.next;
  }
  return result;
};
MagicString.prototype.snip = function snip(start, end) {
  var clone3 = this.clone();
  clone3.remove(0, start);
  clone3.remove(end, clone3.original.length);
  return clone3;
};
MagicString.prototype._split = function _split(index) {
  if (this.byStart[index] || this.byEnd[index]) {
    return;
  }
  var chunk = this.lastSearchedChunk;
  var searchForward = index > chunk.end;
  while (chunk) {
    if (chunk.contains(index)) {
      return this._splitChunk(chunk, index);
    }
    chunk = searchForward ? this.byStart[chunk.end] : this.byEnd[chunk.start];
  }
};
MagicString.prototype._splitChunk = function _splitChunk(chunk, index) {
  if (chunk.edited && chunk.content.length) {
    var loc = getLocator$1(this.original)(index);
    throw new Error("Cannot split a chunk that has already been edited (" + loc.line + ":" + loc.column + ' \u2013 "' + chunk.original + '")');
  }
  var newChunk = chunk.split(index);
  this.byEnd[index] = chunk;
  this.byStart[index] = newChunk;
  this.byEnd[newChunk.end] = newChunk;
  if (chunk === this.lastChunk) {
    this.lastChunk = newChunk;
  }
  this.lastSearchedChunk = chunk;
  return true;
};
MagicString.prototype.toString = function toString4() {
  var str = this.intro;
  var chunk = this.firstChunk;
  while (chunk) {
    str += chunk.toString();
    chunk = chunk.next;
  }
  return str + this.outro;
};
MagicString.prototype.isEmpty = function isEmpty() {
  var chunk = this.firstChunk;
  do {
    if (chunk.intro.length && chunk.intro.trim() || chunk.content.length && chunk.content.trim() || chunk.outro.length && chunk.outro.trim()) {
      return false;
    }
  } while (chunk = chunk.next);
  return true;
};
MagicString.prototype.length = function length() {
  var chunk = this.firstChunk;
  var length2 = 0;
  do {
    length2 += chunk.intro.length + chunk.content.length + chunk.outro.length;
  } while (chunk = chunk.next);
  return length2;
};
MagicString.prototype.trimLines = function trimLines() {
  return this.trim("[\\r\\n]");
};
MagicString.prototype.trim = function trim(charType) {
  return this.trimStart(charType).trimEnd(charType);
};
MagicString.prototype.trimEndAborted = function trimEndAborted(charType) {
  var rx = new RegExp((charType || "\\s") + "+$");
  this.outro = this.outro.replace(rx, "");
  if (this.outro.length) {
    return true;
  }
  var chunk = this.lastChunk;
  do {
    var end = chunk.end;
    var aborted = chunk.trimEnd(rx);
    if (chunk.end !== end) {
      if (this.lastChunk === chunk) {
        this.lastChunk = chunk.next;
      }
      this.byEnd[chunk.end] = chunk;
      this.byStart[chunk.next.start] = chunk.next;
      this.byEnd[chunk.next.end] = chunk.next;
    }
    if (aborted) {
      return true;
    }
    chunk = chunk.previous;
  } while (chunk);
  return false;
};
MagicString.prototype.trimEnd = function trimEnd2(charType) {
  this.trimEndAborted(charType);
  return this;
};
MagicString.prototype.trimStartAborted = function trimStartAborted(charType) {
  var rx = new RegExp("^" + (charType || "\\s") + "+");
  this.intro = this.intro.replace(rx, "");
  if (this.intro.length) {
    return true;
  }
  var chunk = this.firstChunk;
  do {
    var end = chunk.end;
    var aborted = chunk.trimStart(rx);
    if (chunk.end !== end) {
      if (chunk === this.lastChunk) {
        this.lastChunk = chunk.next;
      }
      this.byEnd[chunk.end] = chunk;
      this.byStart[chunk.next.start] = chunk.next;
      this.byEnd[chunk.next.end] = chunk.next;
    }
    if (aborted) {
      return true;
    }
    chunk = chunk.next;
  } while (chunk);
  return false;
};
MagicString.prototype.trimStart = function trimStart2(charType) {
  this.trimStartAborted(charType);
  return this;
};
var BlockAppliesToNode;
(function(BlockAppliesToNode2) {
  BlockAppliesToNode2[BlockAppliesToNode2["NotPossible"] = 0] = "NotPossible";
  BlockAppliesToNode2[BlockAppliesToNode2["Possible"] = 1] = "Possible";
  BlockAppliesToNode2[BlockAppliesToNode2["UnknownSelectorType"] = 2] = "UnknownSelectorType";
})(BlockAppliesToNode || (BlockAppliesToNode = {}));
var NodeExist;
(function(NodeExist2) {
  NodeExist2[NodeExist2["Probably"] = 1] = "Probably";
  NodeExist2[NodeExist2["Definitely"] = 2] = "Definitely";
})(NodeExist || (NodeExist = {}));
var whitelist_attribute_selector = new Map([
  ["details", new Set(["open"])]
]);
var test = typeof process !== "undefined" && process.env.TEST;
var read_only_media_attributes = new Set([
  "duration",
  "buffered",
  "seekable",
  "played",
  "seeking",
  "ended",
  "videoHeight",
  "videoWidth"
]);
var elements_without_text = new Set([
  "audio",
  "datalist",
  "dl",
  "optgroup",
  "select",
  "video"
]);
var applicable = new Set(["Identifier", "ObjectExpression", "ArrayExpression", "Property"]);
var aria_attributes = "activedescendant atomic autocomplete busy checked colcount colindex colspan controls current describedby details disabled dropeffect errormessage expanded flowto grabbed haspopup hidden invalid keyshortcuts label labelledby level live modal multiline multiselectable orientation owns placeholder posinset pressed readonly relevant required roledescription rowcount rowindex rowspan selected setsize sort valuemax valuemin valuenow valuetext".split(" ");
var aria_attribute_set = new Set(aria_attributes);
var aria_roles = "alert alertdialog application article banner blockquote button caption cell checkbox code columnheader combobox complementary contentinfo definition deletion dialog directory document emphasis feed figure form generic grid gridcell group heading img link list listbox listitem log main marquee math meter menu menubar menuitem menuitemcheckbox menuitemradio navigation none note option paragraph presentation progressbar radio radiogroup region row rowgroup rowheader scrollbar search searchbox separator slider spinbutton status strong subscript superscript switch tab table tablist tabpanel term textbox time timer toolbar tooltip tree treegrid treeitem".split(" ");
var aria_role_set = new Set(aria_roles);
var a11y_distracting_elements = new Set([
  "blink",
  "marquee"
]);
var a11y_required_content = new Set([
  "a",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6"
]);
var a11y_no_onchange = new Set([
  "select",
  "option"
]);
var a11y_labelable = new Set([
  "button",
  "input",
  "keygen",
  "meter",
  "output",
  "progress",
  "select",
  "textarea"
]);
var invisible_elements = new Set(["meta", "html", "script", "style"]);
var valid_modifiers = new Set([
  "preventDefault",
  "stopPropagation",
  "capture",
  "once",
  "passive",
  "nonpassive",
  "self"
]);
var passive_events = new Set([
  "wheel",
  "touchstart",
  "touchmove",
  "touchend",
  "touchcancel"
]);
var internal_exports = new Set(["HtmlTag", "SvelteComponent", "SvelteComponentDev", "SvelteComponentTyped", "SvelteElement", "action_destroyer", "add_attribute", "add_classes", "add_flush_callback", "add_location", "add_render_callback", "add_resize_listener", "add_transform", "afterUpdate", "append", "append_dev", "assign", "attr", "attr_dev", "attribute_to_object", "beforeUpdate", "bind", "binding_callbacks", "blank_object", "bubble", "check_outros", "children", "claim_component", "claim_element", "claim_space", "claim_text", "clear_loops", "component_subscribe", "compute_rest_props", "compute_slots", "createEventDispatcher", "create_animation", "create_bidirectional_transition", "create_component", "create_in_transition", "create_out_transition", "create_slot", "create_ssr_component", "current_component", "custom_event", "dataset_dev", "debug", "destroy_block", "destroy_component", "destroy_each", "detach", "detach_after_dev", "detach_before_dev", "detach_between_dev", "detach_dev", "dirty_components", "dispatch_dev", "each", "element", "element_is", "empty", "escape", "escaped", "exclude_internal_props", "fix_and_destroy_block", "fix_and_outro_and_destroy_block", "fix_position", "flush", "getContext", "get_binding_group_value", "get_current_component", "get_custom_elements_slots", "get_slot_changes", "get_slot_context", "get_spread_object", "get_spread_update", "get_store_value", "globals", "group_outros", "handle_promise", "hasContext", "has_prop", "identity", "init", "insert", "insert_dev", "intros", "invalid_attribute_name_character", "is_client", "is_crossorigin", "is_empty", "is_function", "is_promise", "listen", "listen_dev", "loop", "loop_guard", "missing_component", "mount_component", "noop", "not_equal", "now", "null_to_empty", "object_without_properties", "onDestroy", "onMount", "once", "outro_and_destroy_block", "prevent_default", "prop_dev", "query_selector_all", "raf", "run", "run_all", "safe_not_equal", "schedule_update", "select_multiple_value", "select_option", "select_options", "select_value", "self", "setContext", "set_attributes", "set_current_component", "set_custom_element_data", "set_data", "set_data_dev", "set_input_type", "set_input_value", "set_now", "set_raf", "set_store_value", "set_style", "set_svg_attributes", "space", "spread", "stop_propagation", "subscribe", "svg_element", "text", "tick", "time_ranges_to_array", "to_number", "toggle_class", "transition_in", "transition_out", "update_keyed_each", "update_slot", "update_slot_spread", "validate_component", "validate_each_argument", "validate_each_keys", "validate_slots", "validate_store", "xlink_attr"]);
function parse_attributes(str) {
  const attrs = {};
  str.split(/\s+/).filter(Boolean).forEach((attr) => {
    const p = attr.indexOf("=");
    if (p === -1) {
      attrs[attr] = true;
    } else {
      attrs[attr.slice(0, p)] = `'"`.includes(attr[p + 1]) ? attr.slice(p + 2, -1) : attr.slice(p + 1);
    }
  });
  return attrs;
}
async function replace_async(filename, source, get_location, re2, func) {
  const replacements = [];
  source.replace(re2, (...args) => {
    replacements.push(func(...args).then((res) => ({
      offset: args[args.length - 2],
      length: args[0].length,
      replacement: res
    })));
    return "";
  });
  const out = new StringWithSourcemap();
  let last_end = 0;
  for (const {offset: offset2, length: length2, replacement: replacement2} of await Promise.all(replacements)) {
    const content = StringWithSourcemap.from_source(filename, source.slice(last_end, offset2), get_location(last_end));
    out.concat(content).concat(replacement2);
    last_end = offset2 + length2;
  }
  const final_content = StringWithSourcemap.from_source(filename, source.slice(last_end), get_location(last_end));
  return out.concat(final_content);
}
function decoded_sourcemap_from_generator(generator) {
  let previous_generated_line = 1;
  const converted_mappings = [[]];
  let result_line;
  let result_segment;
  let mapping;
  const source_idx = generator._sources.toArray().reduce((acc, val, idx) => (acc[val] = idx, acc), {});
  const name_idx = generator._names.toArray().reduce((acc, val, idx) => (acc[val] = idx, acc), {});
  const mappings = generator._mappings.toArray();
  result_line = converted_mappings[0];
  for (let i = 0, len = mappings.length; i < len; i++) {
    mapping = mappings[i];
    if (mapping.generatedLine > previous_generated_line) {
      while (mapping.generatedLine > previous_generated_line) {
        converted_mappings.push([]);
        previous_generated_line++;
      }
      result_line = converted_mappings[mapping.generatedLine - 1];
    } else if (i > 0) {
      const previous_mapping = mappings[i - 1];
      if (mapping.generatedColumn === previous_mapping.generatedColumn && mapping.originalColumn === previous_mapping.originalColumn && mapping.name === previous_mapping.name && mapping.generatedLine === previous_mapping.generatedLine && mapping.originalLine === previous_mapping.originalLine && mapping.source === previous_mapping.source) {
        continue;
      }
    }
    result_line.push([mapping.generatedColumn]);
    result_segment = result_line[result_line.length - 1];
    if (mapping.source != null) {
      result_segment.push(...[
        source_idx[mapping.source],
        mapping.originalLine - 1,
        mapping.originalColumn
      ]);
      if (mapping.name != null) {
        result_segment.push(name_idx[mapping.name]);
      }
    }
  }
  const map = {
    version: generator._version,
    sources: generator._sources.toArray(),
    names: generator._names.toArray(),
    mappings: converted_mappings
  };
  if (generator._file != null) {
    map.file = generator._file;
  }
  return map;
}
function get_replacement(filename, offset2, get_location, original, processed, prefix, suffix) {
  const prefix_with_map = StringWithSourcemap.from_source(filename, prefix, get_location(offset2));
  const suffix_with_map = StringWithSourcemap.from_source(filename, suffix, get_location(offset2 + prefix.length + original.length));
  let decoded_map;
  if (processed.map) {
    decoded_map = typeof processed.map === "string" ? JSON.parse(processed.map) : processed.map;
    if (typeof decoded_map.mappings === "string") {
      decoded_map.mappings = decode(decoded_map.mappings);
    }
    if (decoded_map._mappings && decoded_map.constructor.name === "SourceMapGenerator") {
      decoded_map = decoded_sourcemap_from_generator(decoded_map);
    }
    sourcemap_add_offset(decoded_map, get_location(offset2 + prefix.length));
  }
  const processed_with_map = StringWithSourcemap.from_processed(processed.code, decoded_map);
  return prefix_with_map.concat(processed_with_map).concat(suffix_with_map);
}
async function preprocess(source, preprocessor, options) {
  const filename = options && options.filename || preprocessor.filename;
  const dependencies = [];
  const preprocessors = preprocessor ? Array.isArray(preprocessor) ? preprocessor : [preprocessor] : [];
  const markup = preprocessors.map((p) => p.markup).filter(Boolean);
  const script = preprocessors.map((p) => p.script).filter(Boolean);
  const style = preprocessors.map((p) => p.style).filter(Boolean);
  const sourcemap_list = [];
  for (const fn of markup) {
    const processed = await fn({
      content: source,
      filename
    });
    if (!processed)
      continue;
    if (processed.dependencies)
      dependencies.push(...processed.dependencies);
    source = processed.code;
    if (processed.map) {
      sourcemap_list.unshift(typeof processed.map === "string" ? JSON.parse(processed.map) : processed.map);
    }
  }
  async function preprocess_tag_content(tag_name, preprocessor2) {
    const get_location = getLocator(source);
    const tag_regex = tag_name === "style" ? /<!--[^]*?-->|<style(\s[^]*?)?(?:>([^]*?)<\/style>|\/>)/gi : /<!--[^]*?-->|<script(\s[^]*?)?(?:>([^]*?)<\/script>|\/>)/gi;
    const res = await replace_async(filename, source, get_location, tag_regex, async (match, attributes = "", content = "", offset2) => {
      const no_change = () => StringWithSourcemap.from_source(filename, match, get_location(offset2));
      if (!attributes && !content) {
        return no_change();
      }
      attributes = attributes || "";
      content = content || "";
      const processed = await preprocessor2({
        content,
        attributes: parse_attributes(attributes),
        filename
      });
      if (!processed)
        return no_change();
      if (processed.dependencies)
        dependencies.push(...processed.dependencies);
      return get_replacement(filename, offset2, get_location, content, processed, `<${tag_name}${attributes}>`, `</${tag_name}>`);
    });
    source = res.string;
    sourcemap_list.unshift(res.map);
  }
  for (const fn of script) {
    await preprocess_tag_content("script", fn);
  }
  for (const fn of style) {
    await preprocess_tag_content("style", fn);
  }
  const map = combine_sourcemaps(filename, sourcemap_list);
  return {
    code: source,
    dependencies: [...new Set(dependencies)],
    map,
    toString() {
      return source;
    }
  };
}

// src/preprocess.ts
var svelte_preprocess = __toModule(require("svelte-preprocess"));
var fs = __toModule(require("fs"));
var path = __toModule(require("path"));
var glob = __toModule(require("glob"));
var sveltePreprocessConfig = require("./svelte-preprocess.config");
var preprocessComponents = (srcDir, destDir) => {
  const srcPath = path.default.join(__dirname, srcDir);
  glob.default(path.default.join(srcPath, "**/*"), {}, async (error2, files) => {
    if (error2) {
      console.error("Unable to scan directory: " + error2);
      return;
    }
    for (const file of files) {
      if (fs.default.lstatSync(file).isDirectory())
        continue;
      const sourceFile = fs.default.readFileSync(file, "utf-8");
      const distFile = file.replace(`/${srcDir}/`, `/${destDir}/`);
      fs.default.mkdirSync(path.default.dirname(distFile), {
        recursive: true
      });
      if (file.endsWith(".svelte")) {
        await parseSvelte(sourceFile, distFile);
      } else {
        fs.default.copyFileSync(file, distFile);
      }
    }
  });
};
var parseSvelte = async (source, destination) => {
  try {
    const item = await preprocess(source, svelte_preprocess.default({
      babel: {
        presets: [
          [
            "@babel/preset-env",
            {
              loose: true,
              modules: false,
              targets: {
                esmodules: true
              }
            }
          ]
        ]
      },
      postcss: {
        plugins: [require("autoprefixer")]
      },
      ...sveltePreprocessConfig || {}
    }), {
      filename: path.default.basename(destination)
    });
    fs.default.writeFileSync(destination, item.code);
  } catch (error2) {
    console.error(error2);
  }
};

// src/bin.ts
var sveltePreprocessConfig2 = require("./svelte-preprocess.config");
var main = async () => {
  var _a, _b, _c, _d, _e;
  const {dest, input} = getArguments();
  const sourceDirectory = (_e = (_d = (_c = (_b = (_a = input == null ? void 0 : input.trim()) == null ? void 0 : _a.split("/")) == null ? void 0 : _b.reverse()) == null ? void 0 : _c.slice(1)) == null ? void 0 : _d.reverse()) == null ? void 0 : _e.join();
  if (!(input == null ? void 0 : input.trim())) {
    console.error("Input file missing");
    process.exit(1);
  }
  buildFiles(input, "esm", dest || ".");
  buildFiles(input, "cjs", dest || ".");
  preprocessComponents(sourceDirectory, dest || "./");
};
var buildFiles = (entryPoint, format, distDir) => {
  try {
    const outfile = `${distDir}/${format === "cjs" ? "index.js" : "index.mjs"}`;
    esbuild.build({
      bundle: true,
      entryPoints: [entryPoint],
      format,
      minify: true,
      outfile,
      platform: "browser",
      target: "esnext",
      plugins: [
        esbuild_svelte.default({
          compileOptions: {dev: false, css: true},
          preprocessor: autoProcess.sveltePreprocess({
            babel: true,
            postcss: {
              plugins: [require("autoprefixer")]
            },
            ...sveltePreprocessConfig2 || {}
          })
        })
      ]
    });
    return true;
  } catch (error2) {
    console.error(error2);
    process.exit(1);
  }
};
main();
