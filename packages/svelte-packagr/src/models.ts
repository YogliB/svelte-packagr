export interface Arguments {
	config?: string;
	help?: boolean;
	input: string;
	output?: string;
	preprocess?: 'all' | 'svelte' | 'js' | 'none';
}
