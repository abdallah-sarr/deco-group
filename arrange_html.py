import sys
import re

html_path = 'c:/Users/hp/Desktop/deco-group/index.html'
with open(html_path, 'r', encoding='utf-8') as f:
    html = f.read()

products_match = re.search(r'        <!-- Products Section \(Moved Up\) -->.*?    </section>', html, re.DOTALL)
if not products_match:
    products_match = re.search(r'        <!-- Products Section -->.*?    </section>', html, re.DOTALL)
    
mission_match = re.search(r'        <!-- Mission Section -->.*?    </section>', html, re.DOTALL)
founder_match = re.search(r'        <!-- Founder Preview Section -->.*?    </section>', html, re.DOTALL)

if not products_match or not mission_match or not founder_match:
    print('Error: Could not find all required sections.')
    sys.exit(1)

products_html = products_match.group(0).replace('<!-- Products Section (Moved Up) -->', '<!-- Products Section -->')
mission_html = mission_match.group(0)
founder_html = founder_match.group(0)

recycle_html = '''        <!-- Recycle Section -->
        <section class="section section-cream" id="recycle">
            <div class="container">
                <div class="recycle-container" style="text-align: center; max-width: 800px; margin: 0 auto; padding: 4rem 2rem; background: var(--card-bg); border-radius: 1.5rem; box-shadow: 0 20px 40px rgba(0,0,0,0.05); border: 1px solid var(--border-color);">
                    <h2 class="section-title">Ensemble, recyclons !</h2>
                    <p class="section-subtitle" style="margin-bottom: 2rem;">
                        Donnez une seconde vie à vos déchets. Contactez-nous pour organiser une collecte ou déposez vos objets usagés dans nos locaux.
                    </p>
                    <a href="https://wa.me/221778110990?text=Bonjour,%20je%20souhaite%20recycler%20des%20d%C3%A9chets.%20Comment%20proc%C3%A9der%20%3F" target="_blank" class="btn btn-primary btn-large" style="display: inline-flex; background: #25D366; color: white; border: none; box-shadow: 0 4px 12px rgba(37,211,102,0.3);">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" style="margin-right: 0.5rem;">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
                        </svg>
                        Recycler par WhatsApp
                    </a>
                </div>
            </div>
        </section>'''

part1 = html[:products_match.start()]
part2 = html[founder_match.end():]

new_html = part1 + mission_html + '\n\n' + founder_html + '\n\n' + products_html + '\n\n' + recycle_html + part2

with open(html_path, 'w', encoding='utf-8') as f:
    f.write(new_html)

print('Updated index.html sections')
