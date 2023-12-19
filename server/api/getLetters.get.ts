import type { Letter } from '#build/models/letter';
import type { Register } from 'models/registerSchema';

export default defineEventHandler(async (event) => {
    const letterRegister = await useStorage('fileSystem').getItem<string>('register.json');
    const register: Register = JSON.parse(letterRegister ?? "");
    const letterPromises = register.items.map((id) => useStorage('fileSystem').getItem<string>(`${id}.json`));
    const letters: Letter[] = (await Promise.all(letterPromises)).map((letterText) => JSON.parse(letterText ?? ""));
    return {
        letters,
    };
});