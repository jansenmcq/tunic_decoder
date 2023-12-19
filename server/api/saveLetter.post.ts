import { type Letter } from 'models/letter';
import { type Register } from 'models/registerSchema';

export default defineEventHandler(async (event) => {
    const body = await readBody<{ letter: Letter }>(event);
    const letter = body.letter;
    await useStorage('fileSystem').setItem(`${letter.id}.json`, JSON.stringify(letter));

    const registerText = await useStorage('fileSystem').getItem<string>('register.json');
    const register: Register = JSON.parse(registerText ?? "");
    register.items.push(letter.id);
    await useStorage('fileSystem').setItem('register.json', JSON.stringify(register));
});