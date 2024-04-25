export default function guardrail(mathFunction) {
  const queue = [];
  let value;

  try {
    value = mathFunction();
  } catch (er) {
    value = er.toString();
  }

  queue.push(value);
  queue.push('Guardrail was processed');

  return queue;
}
