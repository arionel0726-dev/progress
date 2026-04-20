import { useState } from 'react'

type AddLinkInputProps = {
	onAdd: (link: string) => void
}

export function AddLinkInput({ onAdd }: AddLinkInputProps) {
	const [value, setValue] = useState('')

	function handleAdd() {
		const trimmed = value.trim()
		if (!trimmed) return

		onAdd(trimmed)
		setValue('')
	}
	return (
		<div
			style={{ display: 'flex', gap: '8px' }}
			onClick={e => e.stopPropagation()}
		>
			<input
				value={value}
				onChange={e => setValue(e.target.value)}
				onClick={e => e.stopPropagation()}
				placeholder="https://youtube.com/..."
				style={{
					flex: 1,
					background: 'rgba(255,255,255,0.04)',
					border: '1px solid rgba(255,255,255,0.08)',
					borderRadius: '10px',
					color: '#fff',
					padding: '10px 12px',
					outline: 'none'
				}}
			/>

			<button
				type="button"
				onClick={e => {
					e.stopPropagation()
					handleAdd()
				}}
				style={{
					background: 'rgba(255,255,255,0.06)',
					border: '1px solid rgba(255,255,255,0.08)',
					borderRadius: '10px',
					color: '#fff',
					padding: '10px 14px',
					cursor: 'pointer'
				}}
			>
				Добавить
			</button>
		</div>
	)
}
