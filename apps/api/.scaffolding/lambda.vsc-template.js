(function Template() {
	const toPascalCase = (str) =>
		str
			.replace(/(?:^\w|[A-Z]|\b\w)/g, (fl) => fl.toUpperCase())
			.replace(/\W+/g, "");

	const toCamelCase = (str) =>
		toPascalCase(str).replace(/^./, (firstLetter) => firstLetter.toLowerCase());
  
  const toKebabCase = (str) => 
    str
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-+|-+$/g, ''); 

	return {
		userInputs: [
			{
				title: "Lambda Name",
				argumentName: "name",
				defaultValue: "Sample",
			},
		],
		template: [
			{
				type: "folder",
				name: (inputs) => `${toKebabCase(inputs.name)}`,
				children: [
					{
						type: "file",
						name: (inputs) => "handler.ts",
						content: (inputs) => `import { requestAdapter } from "@server/adapters/request";
import { responseAdapter } from "@server/adapters/response";

import type { APIGatewayProxyEventV2 } from 'aws-lambda';
	
export async function handler(event: APIGatewayProxyEventV2) {
	const controller = makeController()
	
	const response = await controller.handle(requestAdapter(event));
		
	return responseAdapter(response);
}
`,
					},
					{
						type: "file",
						name: (inputs) => "index.ts",
						content: (inputs) => `export * from './handler';`,
					},
				],
			},
		],
	};
});
