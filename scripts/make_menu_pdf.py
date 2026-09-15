from reportlab.lib.pagesizes import letter
from reportlab.lib.units import inch
from reportlab.lib.colors import HexColor
from reportlab.pdfgen import canvas

INK = HexColor('#221F1D')
RUST = HexColor('#A8481F')
PAPER = HexColor('#F3ECDD')

menu = [
    ("Starters", [
        ("Smoked Beet & Burrata", "Blood orange, pistachio, torn mint, sourdough crisp", "$18"),
        ("Charred Octopus", "Fingerling potato, salsa verde, lemon oil", "$24"),
        ("Wood-Oven Flatbread", "Whipped ricotta, honey, calabrian chili, thyme", "$16"),
    ]),
    ("Main Courses", [
        ("Hearth-Roasted Bone-In Ribeye", "22oz, dry-aged 28 days, finished over red oak coals", "$68"),
        ("Charred Sweet Corn Agnolotti", "Brown butter, aged pecorino, chili crumb", "$29"),
        ("Whole Roasted Branzino", "Fennel, castelvetrano olive, preserved lemon", "$38"),
        ("Wood-Fired Half Chicken", "Herb jus, charred lemon, market greens", "$32"),
    ]),
    ("Chef's Specialties", [
        ("Tomahawk for Two", "38oz, hearth-charred, rosemary butter, table-side carve", "$118"),
        ("Whole Roasted Cauliflower", "Romesco, herb oil, pine nut, crispy capers", "$26"),
    ]),
    ("Desserts", [
        ("Smoked Chocolate Torte", "Salted caramel, espresso cr\u00e9meux", "$14"),
        ("Bourbon Pecan Pie", "Vanilla bean chantilly", "$12"),
    ]),
]

def draw_page(c, width, height):
    c.setFillColor(PAPER)
    c.rect(0, 0, width, height, fill=1, stroke=0)

def build():
    path = "public/ember-oak-sample-menu.pdf"
    c = canvas.Canvas(path, pagesize=letter)
    width, height = letter
    draw_page(c, width, height)

    margin = 0.85 * inch
    y = height - 1.1 * inch

    c.setFillColor(INK)
    c.setFont("Times-Bold", 28)
    c.drawString(margin, y, "Ember & Oak")
    y -= 0.32 * inch
    c.setFillColor(RUST)
    c.setFont("Helvetica", 10)
    c.drawString(margin, y, "SAMPLE MENU  \u00b7  482 Larkspur Avenue, Chicago, IL  \u00b7  (312) 555-0148")
    y -= 0.15 * inch
    c.setStrokeColor(INK)
    c.setLineWidth(0.75)
    c.line(margin, y, width - margin, y)
    y -= 0.4 * inch

    for section, items in menu:
        if y < 1.6 * inch:
            c.showPage()
            draw_page(c, width, height)
            y = height - 1.1 * inch
        c.setFillColor(INK)
        c.setFont("Times-Bold", 16)
        c.drawString(margin, y, section)
        y -= 0.3 * inch
        for name, desc, price in items:
            if y < 1.2 * inch:
                c.showPage()
                draw_page(c, width, height)
                y = height - 1.1 * inch
            c.setFont("Times-Bold", 12)
            c.setFillColor(INK)
            c.drawString(margin, y, name)
            c.setFont("Times-Bold", 12)
            c.setFillColor(RUST)
            c.drawRightString(width - margin, y, price)
            y -= 0.2 * inch
            c.setFont("Helvetica", 9.5)
            c.setFillColor(HexColor('#5A534C'))
            c.drawString(margin, y, desc)
            y -= 0.32 * inch
        y -= 0.15 * inch

    c.setFont("Helvetica-Oblique", 8.5)
    c.setFillColor(HexColor('#5A534C'))
    c.drawString(margin, 0.6 * inch, "Sample menu for concept review \u2014 dishes and pricing subject to change.")

    c.save()
    print("wrote", path)

if __name__ == "__main__":
    build()
