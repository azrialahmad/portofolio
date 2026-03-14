// Drop your design work into this folder — no code changes needed:
//   src/assets/design/
//
// Supported formats: jpg, jpeg, png, webp, avif

const designImages = Object.values(
  import.meta.glob('./assets/design/*.{jpg,jpeg,png,webp,avif}', { eager: true, query: '?url', import: 'default' })
)

// Mosaic slots: first slot spans 2 columns, rest are regular
const MOSAIC_SLOTS = [{ wide: true }, {}, {}, { wide: true }, {}]

export default function Design() {
  return (
    <section className="section design-section-bg" id="design">
      <div className="container">
        <div className="design-intro">
          <p className="section-label reveal">Design</p>
          <h2 className="section-heading reveal reveal-delay-1">
            Visual thinking
          </h2>
          <p className="about-body reveal reveal-delay-2" style={{ marginTop: '16px' }}>
            Design is how I make sense of things before writing a single line of code.
            Layouts, editorial compositions, and interface concepts — a quieter side of
            the same curiosity.
          </p>
        </div>

        <div className="design-mosaic reveal">
          {MOSAIC_SLOTS.map((slot, i) => (
            <div
              key={i}
              className="photo-placeholder"
              role="img"
              aria-label={designImages[i] ? `Design work ${i + 1}` : 'Design placeholder'}
            >
              {designImages[i] && (
                <img src={designImages[i]} alt={`Design work ${i + 1}`} loading="lazy" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

