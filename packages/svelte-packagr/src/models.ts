export interface Arguments {
	config?: boolean | string;
	help?: any;
	input: string;
	output?: string;
	preprocess?: 'all' | 'svelte' | 'js' | 'none';
}
