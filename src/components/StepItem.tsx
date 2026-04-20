import { AddLinkInput } from './AddLinkInput'

type StepItemProps = {
	step: {
		id: string
		title: string
	}
	done: boolean
	isOpen: boolean
	note: string
	links: string[]
	phaseColor: string
	phaseColorSoft: string
	onToggleDone: (stepId: string) => void
	onToggleOpen: (stepId: string) => void
	onUpdateNote: (stepId: string, note: string) => void
	onAddLink: (stepId: string, link: string) => void
	onRemoveLink: (stepId: string, index: number) => void
}

export function StepItem({
	step,
	done,
	isOpen,
	note,
	links,
	phaseColor,
	phaseColorSoft,
	onToggleDone,
	onToggleOpen,
	onUpdateNote,
	onAddLink,
	onRemoveLink
}: StepItemProps) {
	return (
		<div
			style={{
				borderRadius: '12px',
				background: 'rgba(255,255,255,0.04)',
				border: '1px solid rgba(255,255,255,0.06)',
				overflow: 'hidden',
				backdropFilter: 'blur(8px)'
			}}
			onClick={e => e.stopPropagation()}
		>
			<div
				style={{
					display: 'flex',
					alignItems: 'center',
					gap: '10px',
					padding: '10px 12px'
				}}
			>
				<button
					type="button"
					onClick={e => {
						e.stopPropagation()
						onToggleDone(step.id)
					}}
					style={{
						width: '18px',
						height: '18px',
						borderRadius: '50%',
						border: `2px solid ${done ? phaseColor : '#555'}`,
						background: done ? phaseColorSoft : 'transparent',
						cursor: 'pointer',
						flexShrink: 0,
						padding: 0
					}}
				/>

				<span
					style={{
						flex: 1,
						fontSize: '14px',
						color: done ? '#777' : '#fff',
						textDecoration: done ? 'line-through' : 'none'
					}}
				>
					{step.title}
				</span>

				<button
					type="button"
					onClick={e => {
						e.stopPropagation()
						onToggleOpen(step.id)
					}}
					style={{
						background: 'transparent',
						border: 'none',
						color: '#888',
						cursor: 'pointer',
						fontSize: '16px'
					}}
				>
					{isOpen ? '−' : '+'}
				</button>
			</div>

			{isOpen && (
				<div
					style={{
						borderTop: '1px solid rgba(255,255,255,0.06)',
						padding: '12px'
					}}
					onClick={e => e.stopPropagation()}
				>
					<div style={{ marginBottom: '12px' }}>
						<p style={{ margin: '0 0 8px', color: '#777', fontSize: '12px' }}>
							Заметка
						</p>

						<textarea
							value={note}
							onChange={e => onUpdateNote(step.id, e.target.value)}
							onClick={e => e.stopPropagation()}
							placeholder="Что понял, что пройти дальше, важная мысль..."
							style={{
								width: '100%',
								minHeight: '80px',
								resize: 'vertical',
								background: 'rgba(255,255,255,0.04)',
								border: '1px solid rgba(255,255,255,0.08)',
								borderRadius: '10px',
								color: '#fff',
								padding: '10px 12px',
								outline: 'none'
							}}
						/>
					</div>

					<div>
						<p style={{ margin: '0 0 8px', color: '#777', fontSize: '12px' }}>
							Ссылки
						</p>

						<AddLinkInput onAdd={link => onAddLink(step.id, link)} />

						<div>
							{links.map((link, index) => (
								<div
									key={`${link}-${index}`}
									style={{
										display: 'flex',
										alignItems: 'center',
										gap: '10px',
										padding: '10px 12px',
										borderRadius: '10px',
										background: 'rgba(255,255,255,0.03)',
										border: '1px solid rgba(255,255,255,0.06)'
									}}
								>
									<a
										href={link}
										target="_blank"
										rel="noreferrer"
										onClick={e => e.stopPropagation()}
										style={{
											flex: 1,
											color: '#b6a7ff',
											textDecoration: 'none',
											overflow: 'hidden',
											textOverflow: 'ellipsis',
											whiteSpace: 'nowrap'
										}}
									>
										{link}
									</a>

									<button
										type="button"
										onClick={e => {
											e.stopPropagation()
											onRemoveLink(step.id, index)
										}}
										style={{
											background: 'transparent',
											border: 'none',
											color: '#888',
											cursor: 'pointer',
											fontSize: '16px'
										}}
									>
										×
									</button>
								</div>
							))}
						</div>
					</div>
				</div>
			)}
		</div>
	)
}
