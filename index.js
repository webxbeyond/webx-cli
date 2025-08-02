#!/usr/bin/env node

import chalk from 'chalk';
import boxen from 'boxen';
import figlet from 'figlet';
import gradient from 'gradient-string';

// Generate ASCII logo with gradient
async function getAsciiLogo(text = 'WebX') {
  return new Promise((resolve) => {
    figlet(text, (err, data) => {
      if (err) return resolve('');
      resolve(gradient.pastel.multiline(data));
    });
  });
}

async function main() {
  const ascii = await getAsciiLogo('WebX');

  // Gradient separator line for sections
  const separator = gradient.mind(
    '\n──────────────────────────────────────────────────────────────\n'
  );

  // Content with improved spacing & indentation
  const content = `
${ascii}

${gradient.fruit('🌍 Who Am I?')}
  I'm ${chalk.cyan.bold('Anis Afifi')} — an entrepreneur and web developer with a big dream:
  To make the world a better place for humankind through technology, creativity, and bold ideas.

${gradient.passion('💻 Web Developer')}
  As a developer, I specialize in:
    ${chalk.green('• Web3, AI, and full-stack development')}
    ${chalk.green('• Rapid prototyping, scalable architectures')}
    ${chalk.green('• Cloud deployments, DevOps workflows, and elegant UI/UX')}

${gradient.summer('📬 Contact & Socials')}
    ${chalk.blue('🌐 Website:')}     https://webx.build
    ${chalk.blue('📧 Email:')}       contact@webx.build
    ${chalk.blue('🐦 Twitter:')}     https://twitter.com/webx
    ${chalk.blue('🐙 GitHub:')}      https://github.com/webx
    ${chalk.blue('🔗 LinkedIn:')}    https://linkedin.com/in/webx
    ${chalk.blue('📺 YouTube:')}     https://youtube.com/@webx

${gradient.mind('📂 Featured Projects')}
    ${chalk.cyan('🔧 WebX CLI')} – This terminal portfolio card  
        ${chalk.gray('https://npmjs.com/package/webx-cli')}

    ${chalk.cyan('📡 DevPulse')} – Realtime DevOps dashboard  
        ${chalk.gray('https://github.com/webx/devpulse')}

    ${chalk.cyan('🧠 AI Tutor')} – LangChain-powered AI coding mentor  
        ${chalk.gray('https://github.com/webx/ai-tutor')}

${gradient.teen('📌 Extras')}
    📄 ${chalk.underline('Resume:')} https://webx.build/resume  
    📰 ${chalk.underline('Newsletter:')} https://webx.build/newsletter  
    💬 ${chalk.underline('Community:')} https://discord.gg/webx

${separator}

${gradient.vice('🧑‍💼 Entrepreneur')}
  As a founder and visionary, I focus on:
    ${chalk.green('• Building impactful brands')}
    ${chalk.green('• Creating digital solutions that solve real problems')}
    ${chalk.green('• Empowering communities through innovation and access')}

${gradient.summer('📬 Contact & Socials')}
    ${chalk.blue('🌐 Website:')}     https://anisafifi.com
    ${chalk.blue('📧 Email:')}       contact@anisafifi.com
    ${chalk.blue('🐦 Twitter:')}     https://twitter.com/anisafifi
    ${chalk.blue('🐙 GitHub:')}      https://github.com/anisafifi
    ${chalk.blue('🔗 LinkedIn:')}    https://linkedin.com/in/anisafifi
    ${chalk.blue('📺 YouTube:')}     https://youtube.com/@anisafifi

${chalk.gray('\nMade with 💚 by Anis Afifi — Let’s build the future together\n')}
`;

  const boxed = boxen(content, {
    padding: 1,
    margin: 1,
    borderStyle: 'double',
    borderColor: 'cyan',
    float: 'left',
  });

  console.log(boxed);
}

main();
