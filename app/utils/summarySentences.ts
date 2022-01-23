import SummaryTool from 'node-summary';
import {v4 as uuid} from 'uuid';

export function summarySentences(text: string, numberOfSentences: number = 5) {
  SummaryTool.getSortedSentences(text, numberOfSentences, (err, summary) => {
    if (err) {
      return console.log('Something went wrong man!');
    }

    return JSON.stringify(
      summary.map((sentence: string) => ({id: uuid(), topic: sentence})),
    );
  });
}
