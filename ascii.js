import figlet from 'figlet';
import gradient from 'gradient-string';

export async function printLogo(text = 'WebX') {
  return new Promise((resolve) => {
    figlet(text, (err, data) => {
      if (err) return resolve('');
      console.log(gradient.retro.multiline(data));
      resolve();
    });
  });
}
