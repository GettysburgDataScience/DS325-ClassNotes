Search.setIndex({"alltitles": {"1. HOML Ch 1 (p 3-37), Ch 4 (p 131-148)": [[4, "homl-ch-1-p-3-37-ch-4-p-131-148"], [5, "homl-ch-1-p-3-37-ch-4-p-131-148"]], "2. HOML Ch 4 (p 148-173)": [[4, "homl-ch-4-p-148-173"], [5, "homl-ch-4-p-148-173"]], "An Aside on File Systems": [[8, null]], "An Example from Scratch": [[0, "an-example-from-scratch"]], "An example": [[6, "an-example"]], "Anaconda": [[8, "anaconda"]], "Assessing the model": [[0, "assessing-the-model"]], "Assumptions": [[0, "assumptions"], [1, "assumptions"]], "Bias, Variance, and Regularization": [[2, null]], "Binary classification": [[6, "binary-classification"]], "Binary classification metrics": [[6, "binary-classification-metrics"]], "But polynomials aren\u2019t linear!": [[3, "but-polynomials-aren-t-linear"]], "Classification": [[6, null], [7, null]], "Confusion Matrix": [[6, "confusion-matrix"]], "Cost functions": [[0, "cost-functions"]], "Creating some curvy synthetic data": [[3, "creating-some-curvy-synthetic-data"]], "Creating synthetic data": [[1, "creating-synthetic-data"]], "Displaying the model results": [[3, "displaying-the-model-results"]], "Engineering Polynomial features": [[3, "engineering-polynomial-features"]], "Feature Scaling": [[2, "feature-scaling"]], "Fitting a linear model": [[1, "fitting-a-linear-model"]], "Fitting the model": [[0, "fitting-the-model"], [1, "fitting-the-model"]], "Fitting the models": [[3, "fitting-the-models"]], "GitHub": [[8, "github"]], "Gradient Descent (Very briefly)": [[1, "gradient-descent-very-briefly"]], "Linear Regression": [[7, null]], "Linear Regression (Part 1)": [[0, null]], "Linear Regression (Part 2)": [[1, null]], "Linear Regression with Scikit-learn": [[0, "linear-regression-with-scikit-learn"], [1, "linear-regression-with-scikit-learn"]], "Modeling process": [[0, "modeling-process"]], "Multiple Linear Regression": [[1, "multiple-linear-regression"]], "OneDrive": [[8, "onedrive"]], "Polynomial Regression": [[3, null]], "Reading Assignments Review": [[4, null], [5, null]], "Regularization": [[2, "regularization"]], "Selecting features": [[1, "selecting-features"]], "Setting Up": [[8, null]], "Setting Up Your Computer for Data Science": [[8, "setting-up-your-computer-for-data-science"]], "Setting up VSCode for class": [[8, "setting-up-vscode-for-class"]], "Simple Linear Regression (Recap)": [[1, "simple-linear-regression-recap"]], "Simple linear regression": [[0, "simple-linear-regression"]], "Symptoms of Under- and Over-fitting": [[2, "symptoms-of-under-and-over-fitting"]], "The Bias-Variance Tradeoff": [[2, "the-bias-variance-tradeoff"]], "The modeling process": [[1, "the-modeling-process"]], "VSCode": [[8, "vscode"]], "Welcome to DS325 Applied Data Science": [[7, null]], "What is a polynomial?": [[3, "what-is-a-polynomial"]]}, "docnames": ["01_LinearRegression/01_linear_regression_01", "01_LinearRegression/02_linear_regression_02", "01_LinearRegression/03_regularization", "01_LinearRegression/04_polynomial_regression", "01_LinearRegression/05_reading_review", "01_LinearRegression/05_reading_review_filled", "02_Classification/01_classification_intro", "intro", "setup"], "envversion": {"sphinx": 62, "sphinx.domains.c": 3, "sphinx.domains.changeset": 1, "sphinx.domains.citation": 1, "sphinx.domains.cpp": 9, "sphinx.domains.index": 1, "sphinx.domains.javascript": 3, "sphinx.domains.math": 2, "sphinx.domains.python": 4, "sphinx.domains.rst": 2, "sphinx.domains.std": 2, "sphinx.ext.intersphinx": 1, "sphinxcontrib.bibtex": 9}, "filenames": ["01_LinearRegression/01_linear_regression_01.ipynb", "01_LinearRegression/02_linear_regression_02.ipynb", "01_LinearRegression/03_regularization.ipynb", "01_LinearRegression/04_polynomial_regression.ipynb", "01_LinearRegression/05_reading_review.md", "01_LinearRegression/05_reading_review_filled.md", "02_Classification/01_classification_intro.ipynb", "intro.md", "setup.md"], "indexentries": {}, "objects": {}, "objnames": {}, "objtypes": {}, "terms": {"": [0, 1, 3, 5, 6, 8], "0": [0, 1, 2, 3, 6], "00": 3, "000000": 6, "007060": 6, "01": 3, "010000": 6, "014064": 6, "018061": 6, "019380": 6, "02": 3, "020000": 6, "020310": 6, "022832": 6, "027290": 6, "027414": 6, "029560": 6, "03": 3, "033500": 6, "038803": 6, "04": 3, "040000": 6, "048919": 6, "049960": 6, "05": [], "052630": 6, "052813": 6, "055040": 6, "057700": 6, "058000": 6, "061540": 6, "061867": 6, "062798": 6, "064920": 6, "064930": 6, "065732": 6, "066120": 6, "071170": 6, "071460": 6, "074000": 6, "078033584023714": 1, "079720": 6, "080000": 6, "080040": 6, "083946": 6, "086370": 6, "088799": 6, "09": 3, "092080": 6, "092630": 6, "095870": 6, "096360": 6, "097440": 6, "099930": 6, "1": [1, 2, 3, 6, 7], "10": [0, 3, 4, 5], "100": [2, 3], "1000": 1, "100000": 6, "1000x": 2, "104": 6, "104341": 6, "105300": 6, "106000": 6, "107": 6, "1084": 6, "11": [3, 4, 5, 6], "110000": 6, "111": [0, 1], "114500": 6, "114606": 6, "116600": 6, "12": [0, 1, 3, 6], "125": 6, "127292": 6, "13": [3, 6], "130400": 6, "130700": 6, "131300": 6, "1317": [], "132": [4, 5], "132369": 6, "14": [0, 1, 3, 6], "143": 6, "146000": 6, "146258": 6, "147200": 6, "15": [3, 6], "150": 0, "15246": 3, "155": [4, 5], "156": [4, 5], "156500": 6, "157336": 6, "15772": 3, "16": [1, 3, 6], "161": [4, 5], "161400": 6, "161900": 6, "163400": 6, "17": [1, 3], "170": [4, 5], "170000": 6, "173": [], "179200": 6, "18": [1, 3, 6], "1808004": 0, "181162": 6, "185": 6, "188": 6, "19": [1, 6], "1949": 3, "195700": 6, "1tb": 8, "2": [0, 2, 3, 6, 7], "20": [1, 3], "2000": 2, "200000": 6, "201200": 6, "2023": [], "207500": 6, "208624": 6, "21": [3, 6], "211900": 6, "21479415831364035": 0, "22": 3, "222600": 6, "225": [], "226700": 6, "2395495076": 0, "24": 6, "240000": 6, "24496021": 1, "24496021244698": 1, "25": [0, 6], "2500": 2, "2501": 6, "250400": 6, "251": 6, "252000": 6, "254265": 6, "25659143": [], "2567": 3, "26": 3, "261213": 6, "2613986131": [], "2680": [], "269190": 6, "27": 3, "272188": 6, "277": [], "28": [0, 6], "280000": 6, "282200": 6, "28453481": 0, "289649": 6, "29": 6, "290076": 6, "291000": 6, "298981": 6, "2f": [0, 1, 3], "2x2": 6, "3": [0, 3, 6], "30": [0, 1, 3, 6], "300": [0, 1], "300000": 6, "301036": 6, "304000": 6, "31": 1, "317900": 6, "32": [1, 3, 4, 5], "33": [1, 6], "3314": 3, "339100": 6, "34": [4, 5], "345400": 6, "35": 3, "351": 6, "356993": 6, "36": 6, "37": 1, "370000": 6, "38": 3, "382900": 6, "39": 6, "3911": 3, "395": [], "3d": [0, 1], "3x": [], "4": [0, 1, 2, 3, 6], "40": 1, "400000": 6, "406": 3, "41": 3, "410000": 6, "42": [3, 6], "420": 6, "4254": 6, "426800": 6, "43": [3, 6], "44": 1, "45": 1, "46": 0, "47": [], "483918": 6, "49": [1, 6], "4990": [], "5": [0, 1, 3], "50": [3, 6], "500": 2, "500000": 6, "515": 6, "52": 3, "5238512830236814": [], "524049": 6, "540000": 6, "551": 6, "56": 3, "569": 6, "57": 3, "58": 3, "580": 1, "583128": 6, "598": [], "6": [0, 3, 6], "602542": 6, "61": [0, 3], "6130": [], "618": [], "627417": 6, "63": [1, 3], "64": [1, 3], "648": [], "65": 0, "654": 6, "6567": 3, "66": 3, "660000": 6, "663800": 6, "67": 3, "677223": 6, "68": [0, 1], "686": 6, "69": 1, "7": [3, 6], "70": 3, "700000": 6, "7029": 3, "71": [0, 1, 3], "710000": 6, "71147598": 1, "72": 3, "720000": 6, "73": [], "74": [], "747": 1, "75": [0, 1, 3, 6], "7500": 2, "753": 0, "7679": [], "78": 1, "780000": 6, "782": 6, "79": 3, "790000": 6, "8": [0, 3, 6], "80": 3, "800000": 6, "82": 1, "82273891": 1, "82452688535094": 1, "83": 1, "833242": 6, "8352": 3, "84": 6, "840000": 6, "84030073": 1, "845": 3, "853": 1, "854": [], "86": [3, 6], "8640": 3, "872": 1, "88": 3, "880": 6, "889104": 6, "89": 3, "895": 3, "9": [3, 6], "90": 3, "91": [3, 6], "914129": 6, "930000": 6, "95": 3, "96060424": [], "969033": 6, "97": 6, "970000": 6, "98": [1, 3], "981000": 6, "987": 0, "A": [0, 1, 3, 4, 5, 6, 8], "And": 3, "As": [0, 8], "At": 8, "But": [2, 6, 8], "For": [0, 1, 2, 6, 8], "If": [1, 2, 5, 8], "In": [1, 2, 6, 8], "It": [1, 4, 6], "NOT": 8, "Near": 8, "No": [0, 1], "Not": 1, "On": 8, "One": 1, "Or": 6, "That": [2, 4, 8], "The": [0, 4, 6, 8], "There": [6, 8], "These": [3, 8], "To": 8, "_": [1, 2], "_1": [], "_2": [], "_____": 8, "__dict__": [0, 1], "_i": [0, 1, 2], "about": [1, 2, 6, 8], "abov": [2, 3, 6, 8], "absolut": [0, 2, 8], "accept": [0, 1], "access": 8, "account": 8, "accuraci": 6, "acknowledg": [0, 1], "across": [0, 1, 2], "actual": [0, 1, 5, 6], "ad": 8, "add": [2, 3, 8], "add_subplot": [0, 1], "addition": 8, "advanc": 2, "affect": 2, "affin": 0, "again": 1, "against": 8, "aggreg": 1, "ai": 6, "aka": 8, "algorithm": [1, 2, 4, 5, 6], "align": 3, "all": [0, 1, 2, 6, 8], "allow": [5, 8], "alpha": [1, 2, 3], "alpha_test": 3, "alreadi": 8, "also": [1, 3, 6], "alwai": 6, "amount": 2, "an": [1, 2, 3, 4, 5], "anamoli": 4, "ani": [0, 1, 2, 3, 8], "anoth": [6, 8], "anywher": 8, "apart": 2, "app": 8, "appar": 2, "append": 3, "appl": 8, "appli": [6, 8], "applic": 8, "approach": 3, "appropri": [2, 6], "approxim": [2, 3], "ar": [0, 1, 2, 3, 4, 5, 6, 8], "arang": [0, 1, 3], "arbitrarili": 3, "area": [2, 6], "argmin": 0, "argsort": 0, "aris": [2, 5], "arrai": [0, 1, 3], "articl": 8, "as_fram": 6, "ask": 8, "assess": [1, 6], "assign": [6, 7], "assum": [4, 5, 6], "assumpt": 5, "auto": 0, "autom": 1, "automat": 2, "avail": 8, "averag": 1, "avoid": [6, 8], "ax": [0, 1, 3], "axes3d": [0, 1], "axhlin": 0, "axi": [0, 3], "back": [1, 3, 8], "bad": 5, "balanc": 2, "bank": 6, "bar": [0, 8], "barrett": 8, "base": [2, 6, 8], "bc_df": 6, "becaus": [], "becom": [1, 8], "bedroom": 2, "been": 8, "befal": 8, "befor": [3, 4, 5], "begin": 3, "behav": [], "behaviour": [], "believ": 2, "belong": [4, 5], "below": 1, "benign": 6, "best": [0, 1, 2, 3, 4, 5, 6, 8], "better": [0, 1], "between": [0, 1, 2, 4, 5, 8], "bia": [1, 4, 5, 7], "bigger": 2, "bin": [0, 1, 6], "bird": 6, "bit": 4, "black": [0, 1], "blank": 8, "block": [1, 8], "book": 7, "both": [1, 2, 4], "bottom": 1, "bowl": 1, "box": 8, "br": 2, "breast": 6, "briefli": [4, 5], "brute": 1, "build": 3, "built": 0, "bunch": 4, "c": [0, 3], "c_": [], "c_ridg": [], "calc_ms": 0, "calc_r2": 0, "calcul": [1, 2, 3, 6], "calculu": 3, "call": [2, 3, 6, 8], "came": 8, "can": [1, 2, 3, 4, 6, 8], "cancer": 6, "candid": [0, 4, 5], "cannot": 4, "captur": [0, 2, 4], "care": 8, "case": [1, 2, 6], "categori": [4, 6], "caus": 8, "causat": 1, "caveat": [], "cdot": [0, 1, 2, 4, 6], "cdot2": 2, "cell": 1, "certain": [], "chain": [], "chainedassignmenterror": [], "chanc": 1, "chang": [1, 2, 5, 8], "choic": 1, "choos": [0, 1, 2, 4], "class": [1, 4, 5, 6, 7], "classif": [2, 4, 5], "classifi": 6, "classroom": 8, "classwork": 8, "clean": 1, "cli": 8, "click": 8, "clone": 8, "close": 3, "cloud": 8, "cluster": [4, 5], "cmap": 6, "cmd": 8, "co": 1, "code": 8, "coef": [1, 3], "coef_": [0, 1, 3], "coef_unsc": 3, "coeff": 3, "coeff_df": 3, "coeffeci": 3, "coeffici": [0, 1, 3], "coefs_unsc": 3, "col": [], "colleg": 8, "collinear": [0, 1], "color": [0, 1, 3, 8], "colorbar": 0, "column": [3, 6], "com": 8, "combin": 2, "come": [5, 6, 8], "comfort": 8, "command": 8, "comment": 1, "commit": 8, "common": [0, 1, 2], "commonli": [2, 6], "compact": 6, "compar": [0, 2, 4], "complet": 1, "complex": [1, 2], "compos": 3, "compris": [6, 8], "concaten": 3, "concav": 6, "concept": 6, "conda": 8, "conduct": 0, "confusionmatrixdisplai": 6, "connect": 8, "consid": [1, 2], "constrain": 4, "contain": 8, "content": 8, "continu": [3, 4, 5], "contour": 0, "contourf": 0, "contrast": 2, "contribut": [1, 2], "control": 8, "convei": 1, "conveni": 1, "convent": 0, "converg": 1, "convert": 3, "copi": 8, "copilot": 8, "copy_x": [0, 1], "corner": 8, "correct": 6, "correctli": 6, "correl": [1, 2], "correspond": [3, 6], "cost": [1, 2, 4, 5], "could": 1, "count": 6, "cours": 8, "cpu": 8, "cream": 1, "creat": [0, 8], "credit": 8, "cross": 2, "csv": 8, "ctrl": 8, "cube": 3, "current": 8, "cursor": 8, "curv": 3, "custom": 6, "d": 3, "daniel": 8, "data": [0, 2, 4, 5, 6], "datafram": 3, "dataset": [0, 1, 6], "decid": [0, 1, 3, 6], "decis": [4, 5], "def": [0, 3], "default": [1, 8], "defin": [3, 4, 5, 6], "deg": 3, "degre": 3, "denot": 0, "depend": [0, 1, 5, 6], "deriv": 1, "describ": [2, 4, 6, 8], "desk": 8, "desktop": 8, "detail": [3, 6], "detect": 4, "detector": 6, "determin": [0, 1], "develop": [4, 5, 8], "df": [], "dialog": 8, "dict": 3, "dictionari": 3, "did": 2, "didn": 2, "differ": [0, 1, 2, 3, 4, 5, 8], "dimens": 6, "dimension": [4, 5], "direct": [1, 3, 8], "directori": 8, "disconnect": 8, "discret": 4, "displai": 6, "display_label": 6, "distribut": [0, 1, 8], "divid": 2, "do": [0, 1, 2, 4, 5, 8], "doc": [], "document": 8, "doe": [1, 2, 4, 5], "doesn": 2, "domain": 1, "don": [2, 8], "dot": 3, "down": 8, "downhil": 1, "download": 8, "dramat": 2, "drive": [2, 8], "drop": 2, "ds256": [], "ds325": 8, "dtype": 6, "due": 1, "dure": [4, 5], "e": [0, 1, 3, 4, 5, 6], "each": [0, 1, 2, 3, 4, 6, 8], "eachoth": 1, "eatai": [], "edgecolor": [0, 1], "edibl": 6, "edit": 8, "egregi": 6, "either": 0, "elast": [2, 3, 4, 5], "elastic_poli": 3, "elasticnet": 3, "elif": 3, "els": 3, "email": 8, "emphas": 2, "encount": [0, 1], "end": 3, "engin": 1, "enough": 1, "ensur": [], "enter": 8, "entir": 1, "entireti": 8, "enumer": [0, 3], "environ": 8, "epsilon": [0, 1], "epsilon_i": [0, 1], "equat": [0, 1, 3], "error": [0, 1, 2, 4, 5, 6], "etc": [1, 3, 4, 6, 8], "evalu": [4, 5, 6], "even": [1, 8], "ever": [0, 1, 8], "everi": 0, "exactli": 1, "examin": 3, "exampl": [1, 3, 4, 5, 8], "exist": 3, "expect": 2, "explain": [0, 4, 5], "explor": [1, 2], "express": 3, "ext": 8, "extend": 3, "extens": 8, "extent": 1, "f": [0, 1, 3], "f1": 6, "factor": 1, "fall": 6, "fals": [0, 1, 3, 6], "famili": 5, "featur": [0, 4, 5, 6], "feature_nam": 3, "few": [2, 8], "field": 8, "fig": [0, 1, 3], "figsiz": [0, 1, 3], "figur": [0, 1, 8], "file_nam": 8, "fillna": 3, "filterwarn": 3, "find": [0, 1, 2, 3, 4, 5, 8], "fine": 8, "first": [0, 8], "fit": [4, 5, 6], "fit_intercept": [0, 1], "fit_transform": [3, 6], "flatten": [0, 1], "flavor": [4, 5], "float64": [0, 1, 6], "float_format": 3, "fluctuat": 2, "fn": 6, "focus": 6, "folder": [0, 8], "follow": [0, 1, 2, 6, 8], "font": 8, "fontsiz": [0, 1], "footag": 2, "forc": 1, "form": 2, "format": [3, 8], "foundat": 3, "four": 6, "fp": 6, "frac": [0, 2, 6], "fractal": 6, "fraud": 6, "frequent": 8, "from": [1, 2, 3, 4, 5, 6, 8], "from_predict": 6, "ft": 2, "full": 8, "function": [1, 2, 3, 4, 5, 8], "further": 8, "futurewarn": [], "g": [0, 1, 3, 4, 5, 6], "g7x838zs775f4j_5s231csf80000gn": 0, "gamma": 1, "gave": 1, "gca": 3, "gear": 8, "genai": 6, "gener": [0, 2, 3, 4, 6, 8], "get": [1, 3, 8], "get_ylim": 3, "gettysburg": 8, "give": [4, 5], "given": [1, 4], "global": 1, "gnbu": 6, "go": [1, 3, 6, 8], "goal": 1, "goe": [3, 6], "goldenrod": [0, 1, 3], "good": [1, 2], "got": 1, "grai": [0, 1], "graphic": [6, 8], "grew": 8, "grid": 6, "group": 6, "guess": 1, "guid": 2, "ha": [1, 2, 6, 8], "had": 8, "hand": [6, 8], "hardli": [0, 1], "hardwar": 8, "hat": [0, 1, 2], "have": [0, 1, 2, 3, 6, 8], "he": 8, "headach": 8, "heat": 1, "heatmap": 0, "heirarch": 8, "heirarchi": 8, "help": 8, "henc": 2, "high": [1, 2], "hist": [0, 1], "histogram": [0, 1], "hit": 2, "homoscedast": [0, 1], "host": 8, "hover": 8, "how": [0, 1, 2, 3, 4, 5, 6, 8], "howev": 2, "html": [], "http": [], "hybrid": 6, "hyper": [1, 2, 4, 5], "hypothesi": 6, "i": [0, 1, 2, 4, 5, 6, 8], "ic": 1, "icon": 8, "id": [6, 8], "idea": 4, "ideal": [], "identif": 6, "identifi": 6, "ie": 4, "ignor": [0, 3], "ii": 6, "iloc": 3, "imag": 8, "impact": 2, "impli": [0, 1], "import": [0, 1, 2, 3, 4, 6, 8], "impract": 1, "improv": 8, "inadequ": 4, "includ": [4, 8], "include_bia": 3, "incorrect": 6, "incorrectli": 2, "increasingli": 8, "indent": 8, "independ": [0, 1], "index": [], "indic": [5, 8], "individu": [0, 1], "info": 8, "inform": [2, 8], "initi": 3, "inspect": [2, 3], "instal": 8, "instead": 6, "instruct": 8, "int64": 0, "integr": 8, "intel": 8, "intend": 8, "interact": [1, 8], "intercept": [0, 1, 3], "intercept_": [0, 1, 3], "intercept_unsc": 3, "interest": 8, "interfac": 8, "intermedi": [], "introduc": [3, 6], "ipykernel_23719": [], "ipykernel_40277": [], "ipykernel_40280": [], "ipykernel_41935": [], "ipykernel_47307": [], "ipykernel_92989": [], "ipykernel_93444": 0, "isclos": 3, "iter": 1, "its": [3, 8], "j": [0, 1, 2, 8], "j_": 2, "job": [2, 4], "jupyt": 8, "just": [0, 1, 3, 6], "k": [0, 3], "keep": [1, 8], "kei": 3, "kind": [4, 6], "know": [1, 2, 3, 8], "kwarg": 0, "l": 0, "l1": 2, "l1_ratio": 3, "l2": 2, "label": [0, 1], "lambda": [0, 3], "landscap": 1, "languag": 8, "larg": 2, "larger": 5, "lasso": [2, 3, 4, 5], "lasso_poli": 3, "last": 1, "layer": 8, "leaf": 4, "learn": [2, 3, 4, 5], "least": 2, "lectur": 6, "left": 8, "legend": [0, 1], "legitim": 6, "len": 3, "less": 1, "let": [0, 1, 3, 6], "letter": 0, "level": 8, "like": [2, 8], "limit": 3, "line": [0, 1, 8], "linear": [2, 4, 5], "linear_model": [0, 1, 3, 6], "linearli": [0, 1], "linearregress": [0, 1, 3], "linestyl": [0, 1], "linewidth": [0, 1], "linspac": 3, "linux": 8, "list": [4, 5], "live": 8, "ll": [0, 1, 3, 6, 8], "llm": 8, "load": [6, 8], "load_breast_canc": 6, "loc": 3, "local": [1, 8], "locat": 8, "log": [4, 5], "logist": [4, 5, 6], "logisticregress": 6, "long": 1, "look": [0, 1, 2, 6, 8], "loop": 3, "loss": [0, 1, 4, 5], "lot": 1, "low": [1, 2], "lower": 1, "lowercas": 0, "lowest": 1, "m": [2, 8], "mac": 8, "macbook": 8, "machin": [1, 2, 4, 5, 8], "maco": 8, "made": [3, 6], "mae": 0, "magnitud": 1, "mai": [1, 5, 8], "main": 2, "maintain": 8, "major": 6, "make": [0, 1, 2, 3, 6, 8], "make_regress": [0, 1], "malign": 6, "manag": 8, "mani": [1, 2, 5, 8], "manifest": 5, "manual": 8, "map": 4, "match": 8, "mathemat": 0, "matplotlib": [0, 1, 3, 6], "matrix": 0, "max": [2, 6], "max_depth": 4, "maximum": 2, "me": 3, "meal": 6, "mean": [0, 1, 2, 4, 5, 6], "mean_": 3, "mean_squared_error": [0, 1], "measur": 1, "meet": [0, 1], "menu": 8, "meshgrid": [0, 1], "method": [1, 2, 5], "metric": [0, 1], "mi": 6, "microsoft": 8, "might": [1, 8], "min": [2, 4, 6], "minim": [2, 4], "minima": 1, "minimum": [1, 2], "mishap": 8, "mistak": [2, 6], "model": [2, 4, 5, 6], "model_0": 0, "model_1": 0, "model_best": 0, "model_eq": 3, "model_lr": [0, 1], "model_nam": 3, "model_select": [0, 1, 3, 6], "model_str": 3, "more": [1, 2, 6], "most": [0, 1, 2, 6, 8], "move": 8, "mpl_toolkit": [0, 1], "mplot3d": [0, 1], "mse": [0, 1, 2], "mse_0": 0, "mse_1": 0, "mse_best": 0, "mse_test": [0, 1], "mse_train": [0, 1], "mu": 2, "much": [0, 2], "multi": [4, 5, 6], "multipl": 2, "mushroom": 6, "music": 8, "my": 8, "my_poli": 3, "my_ylim": 3, "n": [0, 1, 2, 3, 6], "n_featur": [0, 1], "n_features_in_": [0, 1], "n_job": [0, 1], "n_sampl": [0, 1], "nabla": 1, "name": [0, 2, 6, 8], "nan": 3, "nbest": 1, "necessari": [1, 8], "need": 8, "neg": [1, 6], "neither": 2, "net": [2, 3, 4, 5], "network": 8, "never": [], "new": [1, 2, 3, 8], "next": [1, 6, 8], "nice": [1, 8], "nmse": 0, "nmse_test": 1, "nois": [0, 1, 2, 3, 5], "noisi": 1, "non": 1, "none": [0, 1, 3], "norm": 2, "normal": [0, 1, 2, 3, 6], "notat": 0, "note": [0, 7], "notic": [0, 3], "novel": 6, "now": [1, 3, 6, 8], "np": [0, 1, 3], "nr2": 0, "nr2_test": [0, 1], "num": 2, "num_data": 0, "num_sampl": 3, "number": [2, 4, 6], "numer": 8, "numpi": [0, 1, 3], "nxn": 6, "o": 0, "object": [], "observ": [0, 1, 2, 4], "oct": [], "off": 2, "often": [0, 5, 6, 8], "okai": 1, "old": 1, "onc": [0, 8], "one": [0, 1, 2, 3, 5, 6, 8], "onli": [0, 1, 2], "open": 8, "oper": [2, 8], "oppos": 4, "optim": 4, "option": 3, "order": 1, "org": [], "organ": 8, "origin": [0, 3], "other": [0, 1, 2, 8], "our": [0, 1, 2, 3, 4, 5, 6, 7], "ourselv": 3, "out": 8, "outcom": [0, 1], "outlier": 0, "over": [0, 1, 3, 4, 5], "overal": 6, "overfit": 2, "p": 6, "p134": [4, 5], "p165": [4, 5], "packag": [1, 8], "paid": 6, "pair": 1, "panda": 3, "paramet": [0, 1, 2, 3, 4, 5], "part": 7, "parti": 6, "particular": [5, 8], "pass": 0, "past": [1, 8], "path": 8, "pathnam": 8, "pc": 8, "pd": 3, "pdf": 8, "penal": [1, 2, 4, 5], "penalti": [2, 4], "per": 4, "percentag": 6, "perfect": 1, "perfectli": 0, "perform": [0, 4, 5], "perimet": 6, "person": 8, "photo": 8, "physic": 6, "pick": 1, "platform": 8, "plot": [0, 1, 3], "plot_surfac": [0, 1], "plt": [0, 1, 3, 6], "plug": 3, "po": 6, "point": [1, 3, 4, 5, 6], "poison": 6, "poli": 3, "polit": 6, "poly_": 3, "poly_coeff": 3, "polynomi": 7, "polynomialfeatur": 3, "polyv": 3, "poor": 4, "pop": 8, "posit": [0, 1, 6], "possibli": [1, 2], "power": 3, "practic": [1, 8], "pre": 1, "precis": 6, "predict": [0, 1, 2, 3, 4, 5, 6], "prefer": [2, 8], "prepackag": 8, "preprocess": [3, 6], "prescrib": 8, "present": 3, "pretti": 8, "prevent": [4, 5], "principl": 2, "print": [0, 1, 3], "probabl": [2, 4, 5], "problem": [1, 6, 8], "problemat": 0, "produc": 1, "product": [3, 6, 8], "prof": 8, "professor": [], "profil": 8, "program": 8, "progress": 7, "project": [0, 1, 8], "properti": 6, "provid": [3, 8], "publicli": 8, "purchas": 1, "puriti": 4, "pursu": 6, "push": 8, "put": 8, "py": 0, "pydata": [], "pylanc": 8, "pyplot": [0, 1, 3, 6], "python": [1, 8], "qm": 0, "qualiti": 8, "quantifi": 0, "r": [0, 1, 2, 3], "r2": 0, "r2_0": 0, "r2_best": 0, "r2_test": [0, 1, 3], "r2_train": [0, 1, 3], "r_1": 0, "radiu": 6, "rais": 3, "rand": 0, "randn": [0, 1], "random": [0, 1, 2, 3], "random_st": [0, 1, 6], "rang": [0, 1, 2, 3], "rank_": [0, 1], "rate": 1, "re": [1, 2, 3], "read": 7, "realiz": 8, "realli": 2, "recal": [1, 2, 6], "recent": 8, "recommend": 8, "reduc": 2, "reduct": [4, 5], "refer": [2, 4, 6, 8], "reg": 3, "reg_poli": 3, "regard": 3, "regist": 6, "regress": [2, 4, 5, 6], "regular": [3, 4, 5, 7], "rel": [2, 8], "relat": [0, 1, 8], "relationship": [0, 1, 2, 4, 5], "renam": 8, "rent": 2, "repeat": 1, "repositori": [7, 8], "repres": 0, "represent": 6, "reshap": [1, 3], "resid": 8, "residiu": 0, "residu": [0, 1, 4, 5, 6], "respect": [3, 6, 8], "result": [1, 2, 4, 5], "return": [0, 3], "return_x_i": 6, "review": [6, 7], "rho": 1, "ridg": [2, 3, 4, 5], "ridge_poli": 3, "right": [2, 8], "role": [4, 5], "root": [2, 8], "roth": 8, "roughli": 2, "round": [], "row": 6, "row_index": [], "rule": [2, 6], "run": [1, 8], "safeguard": 8, "sai": [1, 2, 8], "salmon": 0, "same": [1, 2, 4, 5, 8], "sampl": [0, 1, 2], "save": [1, 8], "sc": 3, "scale": 3, "scale_": 3, "scaler": [2, 3, 6], "scatter": [0, 1, 3], "scientif": 8, "scikit": 3, "score": [0, 1, 3, 6], "scratch": 1, "screen": 8, "seaborn": 6, "search": 8, "searchabl": 8, "section": 1, "see": [1, 8], "seed": [0, 1, 3], "select": [0, 2, 4, 5, 8], "semest": 7, "sens": 8, "sensit": [2, 4], "separ": [4, 8], "seri": 3, "servic": 8, "set": [0, 1, 2, 3, 4, 5, 6], "set_titl": [0, 1, 3], "set_xlabel": [0, 1], "set_ylabel": [0, 1], "set_ylim": 3, "set_zlabel": [0, 1], "sever": [1, 3, 5, 6], "shade": 0, "shame": 8, "shape": [0, 1, 6], "share": 8, "sharei": 3, "sharex": 3, "should": [6, 8], "show": [0, 1, 3, 6, 8], "shrinkag": 2, "shuffl": 1, "side": 8, "sigma": 2, "sign": 8, "signific": 2, "significantli": [4, 5], "silicon": 8, "similar": [1, 8], "simpl": [2, 4], "simpler": [2, 4], "simplif": 2, "singl": [0, 1], "singular_": [0, 1], "site": 1, "situat": 6, "size": [1, 2, 3, 4, 6], "sk": [0, 1], "skip": [1, 8], "sklearn": [0, 1, 3, 6], "skyblu": [0, 1], "slate": 8, "slightli": 1, "slope": [0, 1], "small": [1, 2], "smaller": 5, "smith": 8, "smooth": [3, 6], "sn": 6, "so": [0, 1, 2, 3, 8], "softmax": [4, 5], "solut": [1, 2], "solv": 3, "some": [0, 1, 2, 6, 8], "someth": 8, "sometim": 3, "sort": [0, 3], "sort_idx": 0, "sourc": 2, "space": 8, "span": 2, "specif": [2, 5], "split": [0, 1, 3, 5, 6], "spot": 2, "spuriou": 1, "sq": 2, "sqrt": 2, "squar": [0, 1, 2, 3, 4, 5], "ss": 3, "ss_": 0, "stabl": [], "stack": 8, "stai": [3, 8], "standard": [2, 3, 6], "standardscal": [3, 6], "start": [0, 1, 6, 8], "std": 6, "steep": 1, "step": [1, 8], "stochast": 1, "store": [3, 8], "strict": 8, "string": 3, "stroke": 1, "structur": [2, 8], "student": [6, 8], "studio": 8, "subdirectori": 8, "subfold": 8, "submit": 8, "subplot": [0, 1, 3], "subscript": 0, "subset": [1, 4], "substitut": 3, "subtract": 2, "suggest": [0, 1, 8], "sum": [0, 2], "sum_": [0, 2], "sum_i": 0, "summari": 2, "supervis": [4, 5], "support": 8, "suppos": [3, 8], "sure": 8, "sweet": 2, "symbol": 8, "symmetri": 6, "sync": 8, "t": [0, 2, 8], "tab": 8, "tabl": 8, "take": [1, 3, 8], "taken": 8, "target": [1, 2, 4, 5, 6, 8], "task": [4, 5, 6], "taylor": 3, "teal": [0, 1, 3], "techniqu": [4, 5], "teeni": 1, "tell": [3, 4, 5, 8], "temperatur": 1, "term": 2, "termin": 8, "test": [0, 1, 2, 3, 4, 5, 6], "test_siz": [0, 1, 3, 6], "text": [0, 1, 2, 3, 6, 8], "textur": 6, "than": [0, 2], "thei": [0, 1, 3], "them": 8, "theorem": 3, "theta": [0, 1, 2], "theta_": 1, "theta_0": [0, 1, 2, 4], "theta_0_best": 0, "theta_1": [0, 1, 2, 4], "theta_1_best": 0, "theta_2": [1, 2, 4], "theta_best": 0, "theta_best_idx": 0, "theta_i": [0, 2], "theta_n": [1, 4], "thi": [0, 1, 2, 3, 4, 6, 7, 8], "thing": 1, "think": [1, 2, 6], "those": 8, "though": 8, "three": [4, 5, 8], "through": [0, 8], "throughout": 7, "thumb": 2, "time": [1, 8], "tini": 1, "titl": [0, 3], "tn": 6, "todai": 3, "too": [1, 2, 4, 5], "took": 3, "tool": [2, 8], "top": 8, "total": 0, "toward": 8, "tp": 6, "trace": 8, "tradeoff": [], "train": [0, 1, 2, 3, 4, 5, 6], "train_test_split": [0, 1, 3, 4, 5, 6], "transactaion": 6, "transax": 3, "transform": [2, 3, 6], "transpos": 1, "travers": 8, "treat": 8, "tree": [4, 5, 8], "trend": [2, 4], "tri": [1, 2], "true": [0, 1, 2, 3, 6], "true_divid": 3, "true_model_eq": 3, "try": [2, 6], "tumor": 6, "turn": 8, "two": [1, 2, 3, 4, 5, 6, 8], "ty": 1, "type": [0, 1, 6, 8], "typic": [0, 1, 2, 4, 5], "u": [3, 4, 5], "un": 3, "uncom": 1, "unconsid": 1, "uncorrel": 1, "under": [5, 8], "underbrac": [1, 2], "underfit": 2, "underli": 2, "understand": 8, "uniform": [0, 1], "unknown": [1, 5], "unless": 8, "unravel_index": 0, "unsatisfi": 1, "unscale_coef": 3, "unseen": [4, 5], "unsupervis": [4, 5], "until": 1, "up": [3, 6], "updat": [], "upper": 8, "uppercas": 0, "us": [0, 1, 2, 3, 4, 5, 6, 8], "usag": 6, "usd": 2, "usefulli": 2, "user": [5, 8], "user_guid": [], "userwarn": 0, "usual": 1, "util": 8, "v": [5, 8], "valid": [0, 1, 2, 4, 5], "valu": [0, 1, 2, 3, 4, 5], "var": [0, 2], "vari": 1, "variabl": [0, 1, 3, 4, 5], "varianc": [0, 1, 4, 5, 7], "variant": 2, "variat": [0, 4, 5], "variet": 6, "ve": [0, 8], "vector": [1, 6], "veri": 4, "version": 8, "versu": [1, 8], "via": 8, "view": [], "viewer": 8, "violat": [0, 1], "visit": 8, "visual": 8, "vote": 6, "voter": 6, "vstack": [0, 1], "w0": 0, "w1": 0, "w_0": [], "w_1": [], "w_i": 2, "wa": 6, "wai": [3, 6, 8], "walk": 8, "want": [1, 2, 8], "warn": [3, 8], "we": [0, 1, 2, 3, 4, 5, 6, 8], "web": 8, "weight": [2, 4, 5], "well": [2, 4], "were": [0, 2, 3, 6, 8], "what": [0, 1, 2, 4, 5, 6, 8], "when": [0, 1, 2, 3, 8], "whenev": 3, "where": [0, 1, 2, 6, 8], "whether": 6, "which": [1, 3, 6, 8], "white": 0, "why": [2, 4, 5], "widget": 1, "wild": [4, 5], "window": 8, "wine": 6, "within": 3, "without": [0, 1, 2], "wo": 0, "won": [2, 8], "work": [7, 8], "workaround": [0, 1], "wors": [4, 6], "worst": 6, "would": [1, 3, 8], "wouldn": 3, "wrangler": 8, "write": [], "written": 6, "wrong": 4, "x": [0, 1, 2, 3, 5], "x1": 1, "x2": 1, "x_": 2, "x_1": [1, 2, 3, 4], "x_2": [1, 2, 3, 4], "x_grid": 1, "x_i": [0, 1, 2], "x_model": [], "x_n": [1, 4], "x_name": 3, "x_rang": 3, "x_test": [0, 1, 3, 6], "x_test_scal": 6, "x_train": [0, 1, 3, 6], "x_train_scal": 6, "xlabel": [0, 1], "y": [0, 1, 2, 3, 4, 5, 6], "y0_pred": 0, "y1_pred": 0, "y_": [], "y_hat": 0, "y_i": [0, 1, 2], "y_model": 3, "y_pred": [0, 1, 6], "y_pred_grid": 1, "y_pred_test": [0, 1], "y_pred_train": [0, 1], "y_rang": 3, "y_test": [0, 1, 3, 6], "y_train": [0, 1, 3, 6], "y_true": 3, "ye": 1, "yield": 1, "ylabel": [0, 1], "you": [1, 2, 3, 6, 8], "your": [1, 4, 5], "z": 3, "z_1": 3, "z_2": 3, "z_3": 3, "z_model": 3, "z_name": 3, "z_test": 3, "z_test_scal": 3, "z_train": 3, "z_train_scal": 3, "zero": 2, "zeros_lik": 0, "zip": [3, 8]}, "titles": ["<span class=\"section-number\">1. </span>Linear Regression (Part 1)", "<span class=\"section-number\">2. </span>Linear Regression (Part 2)", "<span class=\"section-number\">3. </span>Bias, Variance, and Regularization", "<span class=\"section-number\">4. </span>Polynomial Regression", "<span class=\"section-number\">5. </span>Reading Assignments Review", "Reading Assignments Review", "<span class=\"section-number\">6. </span>Classification", "Welcome to DS325 Applied Data Science", "Setting Up"], "titleterms": {"1": [0, 4, 5], "131": [4, 5], "148": [4, 5], "173": [4, 5], "2": [1, 4, 5], "3": [4, 5], "37": [4, 5], "4": [4, 5], "But": 3, "The": [1, 2], "an": [0, 6, 8], "anaconda": 8, "appli": 7, "aren": 3, "asid": 8, "assess": 0, "assign": [4, 5], "assumpt": [0, 1], "bia": 2, "binari": 6, "briefli": 1, "ch": [4, 5], "class": 8, "classif": [6, 7], "comput": 8, "confus": 6, "cost": 0, "creat": [1, 3], "curvi": 3, "data": [1, 3, 7, 8], "descent": 1, "displai": 3, "ds325": 7, "engin": 3, "exampl": [0, 6], "featur": [1, 2, 3], "file": 8, "fit": [0, 1, 2, 3], "from": 0, "function": 0, "github": 8, "gradient": 1, "homl": [4, 5], "i": 3, "learn": [0, 1], "linear": [0, 1, 3, 7], "matrix": 6, "metric": 6, "model": [0, 1, 3], "multipl": 1, "onedr": 8, "over": 2, "p": [4, 5], "part": [0, 1], "polynomi": 3, "problem": [], "process": [0, 1], "read": [4, 5], "recap": 1, "regress": [0, 1, 3, 7], "regular": 2, "result": 3, "review": [4, 5], "scale": 2, "scienc": [7, 8], "scikit": [0, 1], "scratch": 0, "select": 1, "set": 8, "simpl": [0, 1], "some": 3, "symptom": 2, "synthet": [1, 3], "system": 8, "t": 3, "tradeoff": 2, "under": 2, "up": 8, "varianc": 2, "veri": 1, "vscode": 8, "welcom": 7, "what": 3, "your": 8}})