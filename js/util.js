let languages = "ar, az, be, bg, bn, bs, cs, da, de, dz, el, en, en-gb, en-us, es, et, fa, fi, fil, fr, he, hi, hr, hu, hy, id, is, it, ja, ka, kk, km, ko, lb, lo, lt, lv, mk, mn, ms, my, ne, no, pl, pt, ro, ru, sk, sl, sq, sr, sv, sw, th, tk, uk, vi, zh"
// const regex = new RegExp("[((\w{2})|(\w{2}-\w{2}))]+","g");
const regex = /[((\w{2})|(\w{2}-\w{2}))]+/g;

const getHello = (code)=>{
     if(isLanguageCode(code)){
         fetch(`https://stefanbohacek.com/hellosalut/?lang=${code}`)
         .then(response => response.json())
         .then((jsonData)=> jsonData);
     }
      return JSON.stringify({msg: "Invalid country code"});
}
const isLanguageCode = (code)=>{
    const langs = languages.match(regex);

    if(langs.indexOf(code)) return true;
    return false;
}