import fs from 'fs-extra';
import path from 'path';
import os from 'os';

export const configPath = path.join(os.homedir(), '.webxcli.json');

export async function readConfig() {
  try {
    return await fs.readJSON(configPath);
  } catch {
    return null;
  }
}

export async function writeConfig(config) {
  try {
    await fs.writeJSON(configPath, config, { spaces: 2 });
  } catch (err) {
    console.error('Failed to save config:', err);
  }
}
