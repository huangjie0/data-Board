export default class MathUtils{
    static singleNumber(n:number){
      return (n + '').split('').map(Number)
    }

    static hexToRgba(hex:string, opacity: number){
      hex = hex.replace('#','')
      if (hex.length === 3) hex = hex.split('').map(c => c + c).join('');
      const r = parseInt(hex.substring(0, 2), 16);
      const g = parseInt(hex.substring(2, 4), 16);
      const b = parseInt(hex.substring(4, 6), 16);
      return `rgba(${r}, ${g}, ${b}, ${opacity})`;
    }

    static darkenColor(color:any,amount: number){
      // 去除可能存在的 # 号
      color = color.replace("#", "");
      // 将颜色值转换为RGB格式
      let r: number | string = parseInt(color.substring(0, 2), 16);
      let g: number | string = parseInt(color.substring(2, 4), 16);
      let b: number | string = parseInt(color.substring(4, 6), 16);
      // 计算加深后的颜色值
      r = Math.floor(r * (1 - amount));
      g = Math.floor(g * (1 - amount));
      b = Math.floor(b * (1 - amount));
      // 将RGB值转换回十六进制，并保证每个通道值在0到255之间
      r = (r < 0 ? 0 : r > 255 ? 255 : r).toString(16);
      g = (g < 0 ? 0 : g > 255 ? 255 : g).toString(16);
      b = (b < 0 ? 0 : b > 255 ? 255 : b).toString(16);
      // 组合成新的颜色值
      const darkenedColor = `#${r}${g}${b}`;
      return darkenedColor;
    }
}