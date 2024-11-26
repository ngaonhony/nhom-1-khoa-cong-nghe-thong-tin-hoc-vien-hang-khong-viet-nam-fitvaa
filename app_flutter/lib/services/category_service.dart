import 'dart:convert';
import 'dart:io';
import 'package:http/http.dart' as http;

class CategoryApi{
  final String url = "http://10.40.6.110:3000/api/categories";
  Future<List<dynamic>> getCategories() async {
    final response = await http.get(Uri.parse(url));
    if (response.statusCode == 200) {
      return json.decode(response.body);
    } else {
      throw Exception('Failed to load categories');
    }
  }
}