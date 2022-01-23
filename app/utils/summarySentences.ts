import tokenizer from 'sbd';
import removeMd from 'remove-markdown';

export function summarySentences(text: string) {
  var sentences = tokenizer.sentences(
    removeMd(text.replace(/(\r\n|\n|\r)/gm, ' ').replace(/[\\"]/g, '')),
    {sanitize: true},
  );

  return sentences.slice(0, 3).join(' ');
}
