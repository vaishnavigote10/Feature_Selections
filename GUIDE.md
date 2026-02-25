# Feature Selection Project - Quick Reference Guide

## 🚀 Quick Navigation

### Main Pages
| Page | File | Purpose |
|------|------|---------|
| **Home** | `index.html` | Main landing page, hero, features |
| **Dashboard** | `dashboard.html` | Interactive visualizations (Plotly.js) |
| **About** | `about.html` | Project details, methodology, business case |
| **Contact** | `contact.html` | Contact form, FAQ, contact info |
| **Analysis** | `Feature_Selection_Analysis.ipynb` | Jupyter notebook with full analysis |

---

## 📊 Dashboard Sections (6 Tabs)

1. **📊 Overview** - Project summary, key findings, analysis phases
2. **📈 Visualizations** - Interactive charts for features, models, performance
3. **🔍 Feature Analysis** - Super features details, consensus voting results
4. **🤖 Model Performance** - 5 models × 5 feature sets, cross-validation results
5. **💼 Business Case** - Cost analysis, savings by strategy, ROI
6. **✅ Recommendations** - Executive summary, implementation roadmap, success metrics

---

## 💻 How to Use

### 1️⃣ View Website
```bash
# Simply open in browser
double-click index.html
# or right-click > Open with > Google Chrome/Firefox
```
✅ No installation needed! Works on all modern browsers.

### 2️⃣ Explore Interactive Dashboard
- Open `dashboard.html`
- Click tabs to view different analysis sections
- Hover over charts for details
- All charts are interactive (zoom, pan, etc.)

### 3️⃣ Run Full Analysis (Jupyter Notebook)
```bash
# Install Python if needed
python --version  # Should be 3.8+

# Install required packages
pip install pandas numpy scikit-learn matplotlib seaborn jupyter

# Launch notebook
jupyter notebook Feature_Selection_Analysis.ipynb
```
📓 Runs complete ML workflow with visualizations

---

## 📁 File Organization

```
Feature_Selection/
│
├── 📄 HTML Pages
│   ├── index.html           ← START HERE (Main home page)
│   ├── dashboard.html       ← Interactive visualizations
│   ├── about.html           ← Project info
│   └── contact.html         ← Contact & FAQ
│
├── 📚 Stylesheet (CSS)
│   ├── css/style.css        ← Main styles & responsive
│   ├── css/animations.css   ← Page animations
│   └── css/dashboard.css    ← Dashboard styles
│
├── ⚙️ JavaScript
│   ├── js/main.js           ← Site interactivity
│   ├── js/dashboard.js      ← Dashboard features
│   ├── js/charts.js         ← Chart.js code
│   └── js/utils.js          ← Helper functions
│
├── 🎨 Assets
│   ├── assets/images/       ← Place images here
│   ├── assets/icons/        ← Place icons here
│   └── assets/fonts/        ← Place custom fonts here
│
├── 📊 Data
│   └── data/data.json       ← Sample data
│
├── 📓 Analysis Notebook
│   └── Feature_Selection_Analysis.ipynb
│
└── 📖 Documentation
    └── README.md            ← Full project documentation
    └── GUIDE.md            ← This file
```

---

## 🎯 Key Features

### Website Features
✅ **Modern Design** - Gradient backgrounds, cards, shadows, rounded corners
✅ **Responsive** - Mobile, tablet, desktop layouts
✅ **Interactive** - Smooth animations, hover effects, transitions
✅ **Navigation** - Sticky navbar, hamburger menu for mobile
✅ **Call-to-Action** - Clear buttons and links throughout

### Dashboard Features
✅ **11 Interactive Charts** - Built with Plotly.js
✅ **Tabbed Navigation** - 6 sections with keyboard navigation (arrow keys)
✅ **Detailed Tables** - Feature analysis, model results, cost comparison
✅ **Business Analysis** - ROI calculations, implementation roadmap
✅ **Print Ready** - Professional layout for printing

### Machine Learning Features
✅ **5 Feature Selection Methods** - Correlation, F-Score, Tree, RFE, PCA/MI
✅ **25 Model Configurations** - 5 models × 5 feature sets
✅ **Cross-Validation** - 5-fold CV for robust evaluation
✅ **Consensus Voting** - Identify "Super Features" (selected 4+ methods)

---

## 📈 Key Results

### 🌟 Super Features Identified
```
1. flavanoids      - Correlation: 0.8475 ⭐⭐⭐⭐⭐
2. proline         - Correlation: 0.6337 ⭐⭐⭐⭐⭐
3. od280/od315     - Correlation: 0.7882 ⭐⭐⭐⭐⭐
4. total_phenols   - Correlation: 0.7192 ⭐⭐⭐⭐
5. hue             - Correlation: 0.6174 ⭐⭐⭐⭐
```

### 📊 Performance
```
Best Model:        RandomForest + RFE
Best R² Score:     0.8911 (89.11%)
Super Features R²:  0.8768 (87.68%)
Efficiency:        98.4% of baseline
Feature Reduction: 62% (13 → 5)
```

### 💰 Financial Impact
```
Annual Savings:    €850,000 (64% reduction)
5-Year Savings:    €4,250,000
10-Year Savings:   €8,500,000
Cost per Batch:    €265 → €95 (62% savings)
Testing Time:      62% faster
```

---

## 🔧 Customization Guide

### Change Colors/Styling
Edit `css/style.css` - Look for color variables:
```css
:root {
  --primary: #4f8cff;      /* Main blue */
  --secondary: #ffb86c;    /* Orange */
  --accent: #23d997;       /* Green */
  --dark-bg: #23272f;      /* Dark background */
}
```

### Update Content
- Edit HTML files directly
- Text is in `<p>`, `<h1>`, `<h2>` tags
- Links are in `<a href="">` tags

### Add New Pages
1. Create `new-page.html`
2. Copy template from existing page
3. Add link to navigation in `index.html`
4. Update CSS if needed

### Modify Data
Edit `data/data.json` to update statistics and information

---

## 🚀 Deployment Options

### Option 1: GitHub Pages (Free)
```bash
# Create GitHub repo
# Push files to main branch
# Enable Pages in Settings
# Visit: username.github.io/Feature_Selection
```

### Option 2: Netlify (Free)
```bash
# Drag & drop files to Netlify.com
# Get automatic deployment
# Custom domain available
```

### Option 3: Local Server (Development)
```bash
# Python 3
python -m http.server 8000
# Visit: localhost:8000

# Or using Node.js
npx http-server
```

### Option 4: Traditional Hosting
Upload files to any FTP server with HTML hosting

---

## 🐛 Troubleshooting

### Issue: Charts not showing in Dashboard
**Solution**: Make sure Plotly.js CDN is accessible
```html
<script src="https://cdn.plot.ly/plotly-latest.min.js"></script>
```

### Issue: Images not loading
**Solution**: 
1. Check file path in `assets/images/`
2. Update `<img src="">` path
3. Use relative paths: `assets/images/filename.png`

### Issue: Styles not applying
**Solution**:
1. Clear browser cache (Ctrl+Shift+Delete)
2. Hard refresh page (Ctrl+Shift+R)
3. Check CSS file is linked correctly

### Issue: Forms not working
**Solution**: 
- Contact form uses JavaScript (no backend needed)
- Success message shows after submission
- Open browser console (F12) to see any errors

### Issue: Jupyter notebook not running
**Solution**:
```bash
# Install Jupyter
pip install jupyter ipython

# Update packages
pip install --upgrade scikit-learn pandas numpy

# Run from correct directory
cd path/to/Feature_Selection
jupyter notebook Feature_Selection_Analysis.ipynb
```

---

## 📚 Learning Resources

### HTML/CSS/JavaScript
- [MDN Web Docs](https://developer.mozilla.org)
- [CSS Tricks](https://css-tricks.com)
- [JavaScript.info](https://javascript.info)

### Machine Learning
- [Scikit-Learn Guide](https://scikit-learn.org/stable/user_guide.html)
- [Feature Selection Methods](https://scikit-learn.org/stable/modules/feature_selection.html)

### Data Visualization
- [Plotly.js Documentation](https://plotly.com/javascript/)
- [Chart.js Guide](https://www.chartjs.org)

### Python & Jupyter
- [Python Official Docs](https://docs.python.org/3/)
- [Jupyter Documentation](https://jupyter.org/documentation)

---

## ✅ Testing Checklist

- [ ] All pages open correctly
- [ ] Navigation links work
- [ ] Dashboard charts render
- [ ] Forms can be filled
- [ ] Mobile view is responsive
- [ ] Links to external sites work
- [ ] Images load properly
- [ ] Animations look smooth
- [ ] Jupyter notebook runs
- [ ] No console errors (F12)

---

## 🎓 What You'll Learn

### From This Project
1. **Feature Selection** - 5 different methods
2. **Machine Learning** - Model training & evaluation
3. **Web Development** - HTML, CSS, JavaScript
4. **Data Visualization** - Interactive charts
5. **Business Analysis** - ROI and cost calculations
6. **Project Management** - Planning and implementation

---

## 📞 Need Help?

### Check the Resources
1. **README.md** - Full project documentation
2. **About Page** - Project methodology
3. **Contact Page** - FAQ section
4. **Notebook** - Detailed code comments

### Common Questions
- **What are Super Features?** → Check About page
- **How does this save money?** → Check Business Case in Dashboard
- **What models were tested?** → Check Model Performance tab
- **How to run the analysis?** → See Jupyter Notebook section above

---

## 🎉 Summary

This is a **complete, production-ready feature selection project** with:
- ✅ Beautiful responsive website
- ✅ Interactive dashboard with visualizations
- ✅ Full machine learning analysis
- ✅ Business case with cost savings
- ✅ Implementation roadmap
- ✅ Professional documentation

**Total Time to Get Started**: ~5 minutes (just open index.html!)

---

**Happy exploring! 🚀**

Last Updated: February 25, 2026
